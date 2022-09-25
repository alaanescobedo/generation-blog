import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { sync } from "glob";
import { POSTS_PATH } from "../config";

export const getAllPosts = () => {
  const slugs = getSlugs()
  const posts = slugs.map(slug => getPostFromSlug(slug))

  const sortedPostsDescending = posts.sort((postA, postB) => {
    if(new Date(postA.meta.date) > new Date(postB.meta.date)) return -1
    if(new Date(postA.meta.date) < new Date(postB.meta.date)) return 1
    return 0
  })

  return sortedPostsDescending
}

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}\\*.mdx`.replace(/\\/g, '/'));
  const slugs = paths.map(path => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split(".")
    return slug
  })
  
  return slugs
}


export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      date: data.date ? data.date.toString() : new Date().toString(),
      tags: data.tags ? data.tags.sort() : [],
    }
  }
}


// Interfaces
interface Post {
  content: string
  meta: PostMeta
}
export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
}