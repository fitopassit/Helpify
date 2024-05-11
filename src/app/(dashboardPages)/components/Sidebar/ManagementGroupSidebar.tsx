import BarChartIcon from "@mui/icons-material/BarChart";
import { Divider } from "@mui/material";
import React from "react";

import { SidebarGroup } from "@/app/(dashboardPages)/components/Sidebar/SidebarGroup";
import { SidebarItem } from "@/app/(dashboardPages)/components/Sidebar/SidebarItem";
import {
  ADMINS,
  CURATORS,
} from "@/app/utils/roleModel";

export const ManagementGroupSidebar = ({
  allowedTabs,
  handleToggleDrawer,
}: {
  allowedTabs: string[];
  handleToggleDrawer: () => void;
}) => {
  return (
    <>
      <Divider />
      <SidebarGroup name="Управление">
        {allowedTabs.includes(ADMINS) && (
          <SidebarItem
            icon={<BarChartIcon />}
            path={ADMINS}
            onClick={handleToggleDrawer}
          >
            Админка
          </SidebarItem>
        )}


        {/*{allowedTabs.includes(DRIVERS) && (*/}
        {/*  <SidebarItem*/}
        {/*    icon={*/}
        {/*      <div*/}
        {/*        style={{ transform: "rotate(90deg)", height: 24, width: 24 }}*/}
        {/*      >*/}
        {/*        <DriverIcon height={24} width={24} />*/}
        {/*      </div>*/}
        {/*    }*/}
        {/*    path={DRIVERS}*/}
        {/*    onClick={handleToggleDrawer}*/}
        {/*  >*/}
        {/*    Водители*/}
        {/*  </SidebarItem>*/}
        {/*)}*/}

        {/*{allowedTabs.includes(ADMINS) && (*/}
        {/*  <SidebarItem*/}
        {/*    icon={<SupervisorAccountIcon />}*/}
        {/*    path={ADMINS}*/}
        {/*    onClick={handleToggleDrawer}*/}
        {/*  >*/}
        {/*    Администраторы*/}
        {/*  </SidebarItem>*/}
        {/*)}*/}

      </SidebarGroup>
    </>
  );
};
