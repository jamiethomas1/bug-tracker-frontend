import Layout from "../../../components/layout"
import OrgList from "../../../components/orglist";
import { useSession } from "next-auth/react"
import { getOrganisations } from "../../../lib/organisations";
import OrgModal from "../../../components/modal";

export async function getServerSideProps(context) {
    const token = context.req.cookies['next-auth.session-token'];
    if (token) {
        const orgList = await getOrganisations(token);
        return {
            props: {
                orgList,
                token
            }
        }
    }
    return {
        props: {}
    }
}

export default function Organisations({ orgList, token }) {
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
            <OrgModal session={session} token={token} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createOrg">Create Organisation</button>
            <OrgList list={orgList} />
        </Layout>
        </>
    )
}