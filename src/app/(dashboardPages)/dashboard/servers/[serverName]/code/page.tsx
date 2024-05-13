"use server";

import { Alert, Button, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

import FilterUsers from "@/app/(dashboardPages)/components/users/FilterUsers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ADMINS, getAllowedTabsForRoleByPathname } from "@/app/utils/roleModel";
import { fixedUrlWithWhite } from "@/app/utils/utils";
import prisma from "@/lib/prisma";

export async function Page({ params }: { params: { serverName: string } }) {
  const session = await getServerSession(authOptions);
  const currentServer = fixedUrlWithWhite(params.serverName);
  const haveAccess = getAllowedTabsForRoleByPathname(
    session?.user?.role,
    ADMINS,
  );

  if (!haveAccess) {
    return <Alert severity={"error"}>У вас нет доступа</Alert>;
  }
  // await prisma.user.update({
  //   where: {
  //     id: 'clw2f3um60000ramd93xywmu9',
  //   },
  //   data: {
  //     ConnectedServers: {
  //       connect: {
  //         id: '35e8cfb5-ac57-441d-9f12-284270f4a3a3',
  //       },
  //     },
  //   },
  // })
  // const user = await prisma.server.findUnique({
  //   where: {
  //     id: "35e8cfb5-ac57-441d-9f12-284270f4a3a3",
  //   },
  //   include: {
  //     Users: true,
  //   },
  // });
  // console.log("user", user);
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
          Кодексы сервера {currentServer}
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginBottom: 2 }}
          href={`/dashboard/servers/${currentServer}/code/add`}
        >
          Добавление кодекса сервера
        </Button>
      </div>
      {/*<FilterUsers users={users} />*/}
    </div>
  );
}

export default Page;
