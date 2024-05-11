import { Alert } from "@mui/material";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  getAllowedTabsForRoleByPathname,
  SERVERS_ADD,
} from "@/app/utils/roleModel";

import AddServer from "./components/AddServer";

export default async function Add() {
  const session = await getServerSession(authOptions);
  const haveAccess = getAllowedTabsForRoleByPathname(
    session?.user?.role,
    SERVERS_ADD,
  );
  if (!haveAccess) {
    return <Alert severity={"error"}>У вас нет доступа</Alert>;
  }

  return <AddServer />;
}
