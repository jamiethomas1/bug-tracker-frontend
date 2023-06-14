import Layout from '../components/layout';
import Usernames from '../components/username';
import { getUsernames } from '../lib/usernames';
import { useSession } from 'next-auth/react'

export async function getServerSideProps(context) {
  const token = context.req.cookies['next-auth.session-token'];
  if (token) {
    const users = await getUsernames(token);
    return {
      props: {
        users
      }
    };
  }

  return {
    props: {}
  }
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
      <Layout home session={session}>
        <section>
          <Usernames users={users} />
        </section>
      </Layout>
    </>
  );
}
