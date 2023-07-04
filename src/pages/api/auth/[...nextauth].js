import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import TwitterProvider from 'next-auth/providers/twitter';

export default NextAuth({
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.id_token = account.id_token;
        token.provider = account.provider;
        console.log('account ', account);
      }
      return token;
    },

    async session({ session, token }) {
      session.id_token = token.id_token;
      session.provider = token.provider;
      return session;
    }
  },
  providers: [
    GoogleProvider({
      clientId: '719471772965-d4k2i1olestgjg57ihj4k43467s5asqp.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    LinkedInProvider({
      clientId: '77kfoz39xvjbpa',
      clientSecret: 'piB6TSt1Ir0cs80Q'
    }),
    TwitterProvider({
      clientId: 'clZCUEY4NmRPRFhiOXZFR25WajE6MTpjaQ',
      clientSecret: '4JcT0MlCcVddFCKQg0dIBUA2f2QX-WrV3OTJtC7OuXcWJ3nPt0',
      version: '2.0'
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
  //   secret: 'use [openssl rand -hex 32] to generate a 32 bytes value'
});
