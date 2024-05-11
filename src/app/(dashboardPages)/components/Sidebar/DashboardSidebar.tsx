import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import {
  Box,
  Drawer,
  IconButton,
  ListSubheader,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { noop } from "lodash";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

import styles from "@/app/(dashboardPages)/Dashboard.module.css";
import {
  ALLOWED_ROLE_TO_MAIN_SIDEBAR,
  ALLOWED_ROLE_TO_SERVERS_SIDEBAR,
  ALLOWED_ROLE_TO_LAWS_SIDEBAR,
  getAllowedTabsForRole,
} from "@/app/utils/roleModel";

import { MainGroupSidebar } from "./MainGroupSidebar";
import { ManagementGroupSidebar } from "./ManagementGroupSidebar";
import { StatementGroupSidebar } from "./StatementGroupSidebar";

export function DashboardSideBar({
  session,
  openDrawer,
  handleToggleDrawer,
}: {
  session: Session;
  openDrawer: boolean;
  handleToggleDrawer: () => void;
}) {
  const router = useRouter();

  const matchMediaQuery768 = useMediaQuery("(max-width: 768px)");

  const userRole = session.user?.role;

  const allowedTabs = getAllowedTabsForRole(userRole);

  const onLogout = useCallback(async () => {
    await signOut({ redirect: false });
    router.replace("/");
    window.location.reload();
  }, []);

  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant={matchMediaQuery768 ? "temporary" : "permanent"}
      className={styles.rootAside}
      open={matchMediaQuery768 ? openDrawer : true}
      onClose={matchMediaQuery768 ? handleToggleDrawer : noop}
    >
      <Toolbar />
      <ListSubheader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        component={"div"}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{ marginTop: 2, marginBottom: 3, fontWeight: "bold" }}
          >
            {session.user?.name}
          </Typography>
        </Box>

        <IconButton onClick={onLogout}>
          <LogoutTwoToneIcon />
        </IconButton>
      </ListSubheader>

      {ALLOWED_ROLE_TO_MAIN_SIDEBAR.includes(session.user!.role) && (
        <MainGroupSidebar
          allowedTabs={allowedTabs}
          handleToggleDrawer={handleToggleDrawer}
          userRole={userRole!}
        />
      )}

      {ALLOWED_ROLE_TO_LAWS_SIDEBAR.includes(session.user!.role) && (
        <ManagementGroupSidebar
          allowedTabs={allowedTabs}
          handleToggleDrawer={handleToggleDrawer}
        />
      )}
    </Drawer>
  );
}
