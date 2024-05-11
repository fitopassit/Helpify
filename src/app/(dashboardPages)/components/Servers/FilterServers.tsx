"use client";

import { List } from "@mui/material";
import { Server } from "@prisma/client";

import styles from "@/app/(dashboardPages)/components/Users/PreviewUser.module.css";

import { ServerItem } from "./ServerItem";


const FilterServers = ({ servers }: { servers: Server[] }) => {

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

export default FilterServers;
