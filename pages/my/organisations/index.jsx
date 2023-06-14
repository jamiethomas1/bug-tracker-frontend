import Layout from "../../../components/layout"
import OrgList from "../../../components/orglist";
import { useSession } from "next-auth/react"
import { getOrganisations } from "../../../lib/organisations";

export async function getServerSideProps(context) {
    const token = context.req.cookies['next-auth.session-token'];
    if (token) {
        const orgList = await getOrganisations(token);
        return {
            props: {
                orgList
            }
        }
    }
    return {
        props: {}
    }
}

export default function Organisations({ orgList }) {
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
        <Layout session={session} pageName="My Organisations">
            <OrgList list={orgList} />
        </Layout>
        </>
    )
}