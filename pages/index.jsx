import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Navbar from '../components/navbar';
import Username from '../components/username';
import { getUsernames } from '../lib/usernames';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export async function getServerSideProps() {
  const users = await getUsernames();
  return {
    props: {
      users
    }
  };
}

export default function Home({ users }) {
  if (!users) {
    useEffect(() => {
      window.location.replace("/login");
    })
    return;
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
