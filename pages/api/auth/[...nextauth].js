import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GitHubProvider({
      id: 'github',
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const authenticated = await fetch("http://localhost/api/checkUser", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      });

      console.log(authenticated);

      if (authenticated) {
        return true;
      }

      return false;
    }
  }
})
