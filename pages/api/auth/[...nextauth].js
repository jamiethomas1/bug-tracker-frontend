import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import * as jose from 'jose';

export default NextAuth({
  providers: [
    GitHubProvider({
      id: 'github',
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      
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

      if (authenticated) {
        return true;
      }

      return false;
    },
    async session({ session, user, token }) {
      // console.log("Session: ", session)
      // console.log("User: ", user)
      // console.log("Token: ", token)
      session.accessToken = token;
      return session;
    }
  },
  jwt: {
    async encode({ token }) {
      const secret = new TextEncoder().encode(process.env.JWT_SIGNATURE_KEY);
      const alg = 'HS512';
      const date = new Date();
      const jwt = await new jose.SignJWT(token)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime(date.getTime() + 1800)
        .sign(secret);
      return jwt;
    },
    async decode({ token }) {
      const secret = new TextEncoder().encode(process.env.JWT_SIGNATURE_KEY);
      const jwt = token;
      const { payload } = await jose.jwtVerify(jwt, secret);
      return payload;
    }
  }
})
