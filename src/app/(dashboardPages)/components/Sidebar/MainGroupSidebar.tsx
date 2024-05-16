import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import { Badge, Collapse, Divider, List } from "@mui/material";
import { Role } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import { SidebarGroup } from "@/app/(dashboardPages)/components/Sidebar/SidebarGroup";
import { SidebarItem } from "@/app/(dashboardPages)/components/Sidebar/SidebarItem";
import {
  SERVER,
  SERVER_ADD,
  CURATORS,
  CURATORS_ADD,
  EDITORS,
  EDITORS_ADD,
  USERS,
  ADMINS, SERVERS
} from "@/app/utils/roleModel";



export const MainGroupSidebar = ({
  allowedTabs,
  handleToggleDrawer,
  userRole,
}: {
  allowedTabs: string[];
  handleToggleDrawer: () => void;
  userRole: Role;
}) => {
  const pathname = usePathname();
  // const router = useRouter();

  const [isOpenCollapse, setOpenCollapse] = useState(() => {
    const activePath = pathname.split("/").splice(2).join("/") as
      | "server"
      | "server/add"
      | "curator"
      | "curator/add"
      | "users"; // TODO: возможно обосрался
    return [SERVER, SERVER_ADD, CURATORS, CURATORS_ADD].includes(activePath);
  });
  //
  // const toggleCollapse = useCallback(() => {
  //   setOpenCollapse((prevState) => !prevState);
  // }, []);

  return (
    <>
      <Divider />
      <SidebarGroup name={"Основные"}>
        <>
          {allowedTabs.includes(SERVERS) && (
            <SidebarItem
              icon={<StorageIcon />}
              path={SERVERS}
              onClick={handleToggleDrawer}
            >
              Сервера
            </SidebarItem>
          )}
        </>
      </SidebarGroup>
    </>
  );
};
