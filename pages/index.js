import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {date&&<small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>}
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export async function getStaticProps() {
  // getStaticProps 静态端渲染，可以被cdn缓存
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default Home