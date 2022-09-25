import { PostMeta } from "../services/posts"

import styles from '../styles/articles.module.css'
import { Article } from "./article"

interface ArticleProps {
  posts: PostMeta[]
}
export const Articles = ({ posts }: ArticleProps) => {
  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.slug}>
          <Article post={post} />
        </li>
      ))}
    </ul>
  )
}
