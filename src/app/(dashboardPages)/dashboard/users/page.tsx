import { Alert, Button, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

import FilterUsers from "@/app/(dashboardPages)/components/Users/FilterUsers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserByRole } from "@/app/models/users";
import { ADMINS, getAllowedTabsForRoleByPathname } from "@/app/utils/roleModel";

export const dynamic = "force-dynamic";
export default async function Admins() {
  const admins = await getUserByRole("Admin");
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
          Список всех авторизованных пользователей
        </Typography>
        <Button
          variant={"outlined"}
          sx={{ marginBottom: 2 }}
          href={"/dashboard/users/add"}
        >
          Создать администратора
        </Button>
      </div>
      <FilterUsers users={admins} />
    </div>
  );
}
