"use client";

import { ListItem } from "@mui/material";
import { User } from "@prisma/client";
import React, { useState } from "react";

import EditUser from "./EditUser";
import PreviewUser from "@/app/(dashboardPages)/components/PreviewUser";

export const UserItem = ({ user }: { user: User }) => {
  const [editMode, setEditMode] = useState(false);

  const [state, setState] = useState({
    name: user.name!,
  });

  const onChangeMode = () => {
    setEditMode(true);
  };

  const onSaveChange = () => {
    setEditMode(false);
  };

  return (
    <ListItem disablePadding>
      <PreviewUser dispatcher={user} onChangeMode={onChangeMode} />

      <EditUser
        state={state}
        userId={user.id}
        onSaveChange={onSaveChange}
        setState={setState}
        openModal={editMode}
        userRole={user.role}
      />
    </ListItem>
  );
};
