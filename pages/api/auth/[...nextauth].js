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
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          // user parameter is what is returned by authorize function
          account.accessToken = user.access_token;
          return true;
        },
        async jwt({ token, account }) {
          if (user) {
            token.accessToken = account.accessToken;
          }
          return token;
        },
        async session({ session, token, user }) {
          session.accessToken = token.accessToken;
          return session;
        }
      },
      async authorize(credentials, req) {
        // Take credentials, and return either a user object or false if invalid
        
        const res = await fetch("http://localhost/api/auth/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json"
          }
        })
        
        const user = await res.json().then(user => user.user);

        if (res.ok && user) {
          return user;
        }

        return null
      }
    })
  ]
})
