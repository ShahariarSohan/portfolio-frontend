import { adminLogin } from "@/actions/auth/adminLogin";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }
  interface USER {
    id: string;
    name?: string | null;
    email?: string | null;
  }
}
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Email or Password is missing");
          return null;
        }
        const data = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
          const res = await adminLogin(data);
          if (!res.success) {
            const errorMessage = await res.text();
            throw new Error(errorMessage || "Login failed");
          }
          const user = res.data;
          if (user) {
            return {
              id: user?.id,
              name: user?.name,
              email: user?.email,
            };
          } else {
            return null;
          }
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.id = token?.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use JWT for session
    maxAge: 60 * 60, // 1 hour
  },

  jwt: {
    maxAge: 60 * 60, // 1 hour
  },

  // cookies: {
  //   sessionToken: {
  //     name: "__Secure-next-auth.session-token",
  //     options: {
  //       httpOnly: true, // Not accessible via JS (prevents XSS)
  //       sameSite: "none", // Allow cross-domain (frontend + backend different)
  //       secure: true, // Must be HTTPS
  //       path: "/", // Available site-wide
  //     },
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
};
