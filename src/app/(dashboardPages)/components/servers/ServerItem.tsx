"use client";

import { Link, ListItem } from "@mui/material";
import { Server } from "@prisma/client";

import PreviewServer from "@/app/(dashboardPages)/components/servers/PreviewServer";

export const ServerItem = ({ server }: { server: Server }) => {
  return (
    <Link href={`servers/${server.name}`}>
      <ListItem disablePadding>
        <PreviewServer server={server} />
      </ListItem>
    </Link>
  );
};
