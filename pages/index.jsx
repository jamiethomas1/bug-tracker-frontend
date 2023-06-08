import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Navbar from '../components/navbar';
import Username from '../components/username';
import { getUsernames } from '../lib/usernames';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'

export async function getServerSideProps() {
  const users = await getUsernames();
  return {
    props: {
      users
    }
  };
}

export default function Home({ users }) {

  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <a href='/api/auth/signin'>Sign in</a>
      </>
    )
  }

  return (
    <>
      <Layout home>
        <Navbar />
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <Username users={users} />
        </section>
      </Layout>
    </>
  );
}
