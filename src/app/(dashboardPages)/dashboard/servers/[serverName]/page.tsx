"use server";

import { Alert, Button, TextField, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

import FilterUsers from "@/app/(dashboardPages)/components/users/FilterUsers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUsers } from "@/app/models/users";
import { ADMINS, getAllowedTabsForRoleByPathname } from "@/app/utils/roleModel";
import { fixedUrlWithWhite } from "@/app/utils/utils";
import SearchUsers from "@/app/(dashboardPages)/components/users/SearchUsers";

export async function Page({ params }: { params: { serverName: string } }) {
  const users = await getUsers();
  const session = await getServerSession(authOptions);
  const currentServer = fixedUrlWithWhite(params.serverName);
  const haveAccess = getAllowedTabsForRoleByPathname(
    session?.user?.role,
    ADMINS,
  );

  if (!haveAccess) {
    return <Alert severity={"error"}>У вас нет доступа</Alert>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant={"h4"} sx={{ marginBottom: 2 }}>
          Список всех пользователей сервера {currentServer}
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginBottom: 2 }}
          href={`/dashboard/servers/${currentServer}/code`}
        >
          Кодексы сервера
        </Button>
        <Button
          variant={"outlined"}
          sx={{ marginBottom: 2 }}
          href={`/dashboard/servers/${currentServer}/code`}
        >
          Законодательная база сервера
        </Button>

      </div>
      <SearchUsers users={users}/>

    </div>
  );
}

export default Page;
