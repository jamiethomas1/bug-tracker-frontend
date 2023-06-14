import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';

const name = 'Jamie Thomas';
export const siteTitle = 'Bug Tracker';

export default function Layout({ children, home, session, title=siteTitle }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta property='og:image' 
                    content={`https://og-image.vercel.app/${encodeURI(
                        title,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} 
                />
                <meta name="og:title" content={title} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{title}</title>
            </Head>
            <main>
                <Navbar session={session} />
                <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2x1}>{name}</h1>
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
                <div>{children}</div>
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
