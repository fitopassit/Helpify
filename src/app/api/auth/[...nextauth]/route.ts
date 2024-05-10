import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import DiscordProvider from "next-auth/providers/discord";

import prisma from "@/lib/prisma";

interface Session {
  user?: {
    name: string;
    email: string;
    image: string;
    role: "Admin" | "Curator" | "Editor" | "User";
    id: string;
  };
  expires: string,
}

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      const dbEntry = await prisma.user.findFirst({
        where: { id: token.id },
      });
      if (session.user) {
        session.user.role = dbEntry ? dbEntry.role : token.role;
        session.user.id = token.id;
      }

      return session;
    },
  },
  // debug: process.env.NODE_ENV === "development",
};

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
