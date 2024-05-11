import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { checkRoleIsAllowed } from "@/app/utils/roleModel";

import { Dashboard } from "./Dashboard";
import styles from "./Dashboard.module.css";
import ThemeProviderContext from "@/app/context/ThemeProviderContext";
import { ServerSessionProvider } from "@/app/api/auth/[...nextauth]/ServerSessionProvider";

export const metadata = {
  title: "Majestic-Helpify | Дашборд",
  description: "Дашборд панель",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  if (!session.user?.role) return;

  if (checkRoleIsAllowed(session.user.role)) {
    return (
      <html lang={"ru"}>
        <body className={styles.body}>
          <NextTopLoader showSpinner={false} color={"#4285F4"} />
          Доступ запрещён
        </body>
      </html>
    );
  }

  return (
    <html lang={"ru"}>
      <body className={styles.body}>
        <ThemeProviderContext>
          <ServerSessionProvider session={session}>
            <NextTopLoader showSpinner={false} color={"#4285F4"} />
            <Dashboard session={session}>{children}</Dashboard>
          </ServerSessionProvider>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
