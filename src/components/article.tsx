import Link from 'next/link';
import { PostMeta } from '../services/posts';
import styles from '../styles/articles.module.css'

interface ArticleProps {
  post: PostMeta
}
export const Article = ({ post }: ArticleProps) => {
  return (
    <>
      <div className={styles.title}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </div>
      <p>{post.excerpt}</p>
      <p className={styles.tags}>
        {post.tags.map(tag => (
          <Link href={`/tags/${tag}`} key={tag}>{tag}</Link>)
        )}
      </p>
    </>
  )
}
