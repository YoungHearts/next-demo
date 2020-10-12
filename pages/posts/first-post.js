import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
function FirstPost() {
    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
    </Layout>
}
// export async function getServerSideProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://next-learn-starter.now.sh/_next/data/iof02funBo7MW84WIwCJd/index.json')
//     const posts = await res.json()
  
//     // By returning { props: posts }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
  
export default FirstPost