"use client";

import { List } from "@mui/material";
import { Server } from "@prisma/client";

import styles from "@/app/(dashboardPages)/components/servers/PreviewServer.module.css";

import { ServerItem } from "./ServerItem";


const ServersList = ({ servers }: { servers: Server[] }) => {

  return (
    <>
      <List disablePadding className={styles.list}>
        {servers.map((server) => {
          return <ServerItem key={String(server.id)} server={server} />;
        })}
      </List>
    </>
  );
};

export default ServersList;
