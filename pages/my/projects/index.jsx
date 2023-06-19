import Layout from "../../../components/layout"
import ProjTable from "../../../components/projtable";
import { useSession } from "next-auth/react"
import { getProjects } from "../../../lib/projects";
import ProjModal from "../../../components/modal";

export async function getServerSideProps(context) {
    const token = context.req.cookies['next-auth.session-token'];
    if (token) {
        const projList = await getProjects(token);
        return {
            props: {
                projList,
                token
            }
        }
    }
    return {
        props: {}
    }
}

export default function Projects({ projList, token }) {
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
        <Layout session={session} pageName="My Projects">
            <ProjModal session={session} token={token} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProj">Create Project</button>
            <ProjTable list={projList} />
        </Layout>
        </>
    )
}