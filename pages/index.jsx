import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Username from '../components/username';
import { getUsernames } from '../lib/usernames';
import Navbar from '../components/navbar';

export async function getServerSideProps() {
  const users = await getUsernames();
  return {
    props: {
      users
    }
  };
}

export default function Home({ users }) {
  return (
    <>
    <Navbar />
    <Layout home>
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
