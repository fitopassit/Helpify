import classNames from "classnames";
import type { Metadata } from "next";
// import { auth } from "@/auth";
import { getServerSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { ServerSessionProvider } from "@/app/api/auth/[...nextauth]/ServerSessionProvider";
import { Footer } from "@/app/(clientPages)/components/Footer";
import { Header } from "@/app/(clientPages)/components/Header";
import ThemeProviderContext from "@/app/context/ThemeProviderContext";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Majestic-helpify",
  description: "Created by Kettal & Fitopassit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const session = await getServerSession({
    // adapter: PrismaAdapter(prisma),
    providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_ID ?? "",
        clientSecret: process.env.DISCORD_SECRET ?? "",
      }),
    ],
  });
  return (
    <html lang="ru">
      <body className={styles.body}>
        <ThemeProviderContext>
          <ServerSessionProvider session={session}>
            <section
              className={classNames(styles.container, {
                [styles.wideContainer!]: true,
              })}
            >
              <Header />
              {children}
              <Footer />
            </section>
          </ServerSessionProvider>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
