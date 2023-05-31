import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Take credentials, and return either a user object or false if invalid
        const res = await fetch("/api/auth/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const user = await res.json()
        const userObj = user.user

        if (res.ok && userObj) {
          return user
        }

        return null
      }
    })
  ]
})
