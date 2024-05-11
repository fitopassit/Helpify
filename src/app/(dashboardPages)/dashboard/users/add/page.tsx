import { Alert } from "@mui/material";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  ADMINS_ADD,
  getAllowedTabsForRoleByPathname,
} from "@/app/utils/roleModel";

import AddUser from "./components/AddUser";

export default async function Add() {
  const session = await getServerSession(authOptions);

  const haveAccess = getAllowedTabsForRoleByPathname(
    session?.user?.role,
    ADMINS_ADD,
  );

  if (!haveAccess) {
    return <Alert severity={"error"}>У вас нет доступа</Alert>;
  }

  return <AddUser />;
}
