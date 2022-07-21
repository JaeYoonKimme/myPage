import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-sky-500 text-center text-3xl">{postData.title}</h1>
      <div className="text-center text-slate-500 no-underline text-s">
        <Date dateString={postData.date} />
      </div>
      <section className="mt-6 w-108 rounded-xl border p-6 shadow-xl">
        <article className="prose prose-xs">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}