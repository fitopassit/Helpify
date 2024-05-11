"use client";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Session } from "next-auth";
import Link from "next/link";
import React, { ReactNode, useCallback, useState } from "react";

import { DashboardSideBar } from "@/app/(dashboardPages)/components/Sidebar/DashboardSidebar";
import { ServerSessionProvider } from "@/app/api/auth/[...nextauth]/ServerSessionProvider";

export function Dashboard({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setOpenDrawer((prevState) => !prevState);
  }, []);

  return (
    <ServerSessionProvider session={session}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DashboardTopBar handleToggleDrawer={handleToggleDrawer} />

        <DashboardSideBar
          session={session}
          openDrawer={openDrawer}
          handleToggleDrawer={handleToggleDrawer}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ServerSessionProvider>
  );
}

function DashboardTopBar({
  handleToggleDrawer,
}: {
  handleToggleDrawer: () => void;
}) {
  const matchMediaQuery768 = useMediaQuery("(max-width: 768px)");
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ zIndex: 1201, background: "#1C2536" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {matchMediaQuery768 && (
            <IconButton onClick={handleToggleDrawer} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          )}
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              position: "relative",
              fontSize: matchMediaQuery768 ? "12px" : "16px",
            }}
            href={"/dashboard"}
          >
            Majestic-Helpify Dashboard
          </Link>
        </Typography>
        <Button variant={"contained"} href={"/"}>
          {matchMediaQuery768 ? <HomeIcon /> : `На главную`}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
