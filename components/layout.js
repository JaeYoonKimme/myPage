import styles from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = "JaeYoon Kim"
export const siteTitle = 'JaeYoon Kim'

export default function Layout({children, home}){
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="name"
                    content="Empty"
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile2.jpeg"
                            className="rounded-full shadow-lg"
                            height={225}
                            width={225}
                            alt={name}
                        />
                        <h1 className="text-4xl font-bold overline mt-3">{name}</h1>
                    </>
                ) : (
                    <>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}