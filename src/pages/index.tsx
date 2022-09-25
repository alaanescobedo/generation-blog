import { getAllPosts, PostMeta } from '../services/posts'
import { Articles } from '../components/article-list'

interface HomeProps {
  posts: PostMeta[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <h1>Articulos</h1>
      <Articles posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  const firstPosts = posts.slice(0, 9)
  const metadata = firstPosts.map((post) => post.meta)

  return { props: { posts: metadata } }
}