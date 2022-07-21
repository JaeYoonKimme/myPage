import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';

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
          <h1 className="mt-10 text-3xl text-sky-500 text-center">POSTS</h1>
          <section className="mt-6 w-108 rounded-xl border p-6 shadow-xl">
            <section>
              <h2 className="text-2xl">TIL {' '}
                <a className="text-xs text-slate-500">Today I Learend</a>
              </h2>
              <ul className="mt-7">
                {allPostsData.map(({id, date, title}) => (
                  <li className="mt-3" key={id}>
                    <Link href={`/posts/${id}`}>
                      <a className="text-l font-medium hover:text-sky-500 hover:underline">{title}</a>
                    </Link>
                    <br />
                    <a className="text-slate-500 no-underline text-xs">
                      <Date dateString={date} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </Layout>
    )
  }