import { List, ListSubheader } from "@mui/material";
import React, { ReactNode } from "react";

export const SidebarGroup = ({
  name = "",
  children,
}: {
  name?: string;
  children: ReactNode;
}) => {
  return (
    <List
      subheader={
        name ? <ListSubheader component="div">{name}</ListSubheader> : null
      }
    >
      {children}
    </List>
  );
};
