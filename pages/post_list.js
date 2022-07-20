import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      }
    }
  }


export default function PostList({ allPostsData }) {
    return (
        <Layout>
            <h1>POSTS</h1>
            <section className={'${utilStles.headingMd} ${utileStyles.padding1px}'}>
            <h2 className={utilStyles.headingLg}>TIL</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title}) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
                </li>
          ))}
            </ul>
            </section>
        </Layout>
    )
  }