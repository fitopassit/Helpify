import { Alert } from "@mui/material";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  ADMINS_ADD,
  getAllowedTabsForRoleByPathname, SERVERS_ADD
} from "@/app/utils/roleModel";

import AddServer from "./components/AddServer";

export default async function Add() {
  const session = await getServerSession(authOptions);
  console.log('session role', session?.user?.role);
  console.log('path', SERVERS_ADD);
  const haveAccess = getAllowedTabsForRoleByPathname(
    session?.user?.role,
    SERVERS_ADD,
  );
  console.log('session role', haveAccess);
  if (!haveAccess) {
    return <Alert severity={"error"}>У вас нет доступа</Alert>;
  }

  return <AddServer />;
}
