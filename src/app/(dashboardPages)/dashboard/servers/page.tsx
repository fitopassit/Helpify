import { Alert, Button, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServers } from "@/app/models/users";
import { ADMINS, getAllowedTabsForRoleByPathname } from "@/app/utils/roleModel";
import FilterServers from "@/app/(dashboardPages)/components/Servers/FilterServers";


export const dynamic = "force-dynamic";
export default async function Admins() {

  
  
  const servers = await getServers();
  const session = await getServerSession(authOptions);

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
          Список серверов
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginBottom: 2 }}
          href={"/dashboard/servers/add"}
        >
          Добавить сервер
        </Button>
      </div>
      <FilterServers servers={servers} />
    </div>
  );
}
