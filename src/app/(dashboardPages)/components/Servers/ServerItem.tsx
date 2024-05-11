"use client";

import { ListItem } from "@mui/material";
import { Server } from "@prisma/client";
import React, { useState } from "react";

import EditServers from "./EditServers";
import PreviewServer from "@/app/(dashboardPages)/components/Servers/PreviewServer";

export const ServerItem = ({ server }: { server: Server }) => {
  const [editMode, setEditMode] = useState(false);

  const [state, setState] = useState({
    name: server.name,
  });

  const onChangeMode = () => {
    setEditMode(true);
  };

  const onSaveChange = () => {
    setEditMode(false);
  };

  return (
    <ListItem disablePadding>
      <PreviewServer server={server} onChangeMode={onChangeMode} />

      <EditServers
        state={state}
        userId={server.id}
        onSaveChange={onSaveChange}
        setState={setState}
        openModal={editMode}
      />
    </ListItem>
  );
};
