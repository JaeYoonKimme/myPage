import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/others.module.css';
import homeStyles from '../styles/Home.module.css';
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

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="mt-10 text-3xl text-sky-500 text-center">Who Am I?</h1>
      <section className="mt-5 w-108 rounded-xl border p-6 shadow-xl">
        <p>Major in C.S.💻 in Handong Global University.</p>
        <p>Interested in.. <br />Computer🧑🏻‍💻<br />Skate boarding🛹<br />Reading&Writing Short Stories📚</p>
        <p>
          GitHub : {' '}
          <a href="https://github.com/JaeYoonKimme" target="_blank" rel="noreferrer" className="text-sky-400">Here</a>
        </p>
        <p>Email : pikachu@handong.ac.kr</p>
      </section>


      <h1 className="mt-10 text-3xl text-sky-500 text-center">POSTS</h1>
      <section className="mt-5 w-108 rounded-xl border p-6 shadow-xl">
        <section>
          <h2 className="text-2xl">TIL {' '}
            <a className="text-xs text-slate-500">Today I Learend</a>
          </h2>
          <ul className="mt-5">
            {allPostsData.slice(0,5).map(({id, date, title}) => (
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
          <Link href="/post_list" passHref className="">
            <a className="text-sky-500 text-xs">view more</a>
          </Link>
        </section>
      </section>
      
      <br />
      <br />
      <br />

      <footer className="text-center">
      <small><Link href="/others" passHref>NPM team</Link></small>
      </footer>
      
    </Layout>
  )
}