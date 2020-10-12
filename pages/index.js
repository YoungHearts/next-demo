import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>next demo</p>
        <p>这是我的一个next.js demo</p>
      </section>
      <Link href="/posts/first-post">first-post</Link>
    </Layout>
  )
}