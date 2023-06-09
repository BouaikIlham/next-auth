import { NextAuthOptions, User } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaClient } from '@prisma/client'
import { JWT } from "next-auth/jwt"

const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {
            email: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error("invalid creadentials")
            }
            const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email,
                },
            });
            if (!user || !user?.hashedPassword) {
                throw new Error("Invalid credentials");
              }
      
              const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  user.hashedPassword
              )
      
              if (!isCorrectPassword) {
                  throw new Error("Invalid credentials");
              }
            
            return user
          },
          
        }),
        
      ],
      
      callbacks: {
        async jwt({ token, user }: { token: JWT, user?: User | null }) {
          if (user) {
            token.role = user.role;
          }
          return token;
        },
        async session({ session, token, user }) {
          session.user = token
          return session // The return type will match the one returned in `useSession()`
        },
      },

     
      pages: {
        signIn:"/auth/login"
      },
      debug: process.env.NODE_ENV === 'development',

      secret: process.env.NEXTAUTH_SECRET

}

export default NextAuth(authOptions)