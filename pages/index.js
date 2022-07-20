import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/others.module.css';
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
      <h1>Who Am I?</h1>
      <section className={utilStyles.headingMd}>
        <p>Major in C.S.💻 in Handong Global University.</p>
        <p>Interested in.. <br />Computer🧑🏻‍💻<br />Skate boarding🛹<br />Reading&Writing Short Stories📚</p>
        <p>
          GitHub : {' '}
          <a href="https://github.com/JaeYoonKimme" target="_blank" rel="noreferrer">Here</a>
        </p>
        <p>Email : pikachu@handong.ac.kr</p>
      </section>
      <br />
      <br />
      <br />

      <h1>POSTS</h1>
      <section className={'${utilStles.headingMd} ${utileStyles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>TIL</h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0,5).map(({id, date, title}) => (
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
        <small><Link href="/post_list" passHref>view more</Link></small>
      </section>
      
      {/*}
      <section className={'${utilStles.headingMd} ${utileStyles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>Review (Book, Movie, etc...)</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      {*/}
      
      <Link href="/others" passHref><button className={styles.button}>NPM Members</button></Link>
    </Layout>
  )
}