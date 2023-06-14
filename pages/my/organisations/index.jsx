import Layout from "../../../components/layout"
import { useSession } from "next-auth/react"

export default function Organisations() {
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
        <Layout session={session}>
            <p>Hello</p>
        </Layout>
        </>
    )
}