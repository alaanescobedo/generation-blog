import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Generation CH18 Blog</title>
      </Head>

      <div className='container'>
        <nav className='navbar'>
          <Link href="/">
            Principal
          </Link>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
