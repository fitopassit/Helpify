import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Role, User } from "@prisma/client";
import React from "react";

import styles from "@/app/(dashboardPages)/components/users/PreviewUser.module.css";
import { ROLE_STATUS_COLOR } from "@/app/utils/contants";

type ValueType = keyof typeof Role;

const AllRoles = {
  Admin: "Администрация",
  Curator: "Куратор",
  Editor: "Редактор",
  User: "Обычный пользователь",
};

const PreviewUser = ({
  user,
  onChangeMode,
}: {
  user: User;
  onChangeMode: (state: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Avatar variant="rounded">{user.name}</Avatar>
        <Stack
          sx={{
            display: "flex",
            flexGrow: 1,
            margin: "0 16px",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
          direction="row"
        >
          <Typography fontWeight={700}>{user.name}</Typography>
        </Stack>
      </div>
      <div className={styles.editButton}>
        <IconButton
          sx={{ alignSelf: "flex-start" }}
          onClick={() => onChangeMode(true)}
        >
          <Edit sx={{ fontSize: 16 }} />
        </IconButton>
      </div>
      <Divider sx={{ margin: "12px 0" }} />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Chip
          size={"small"}
          icon={
            <span
              style={{
                background: ROLE_STATUS_COLOR[user.role as ValueType],
                height: "12px",
                width: "12px",
                borderRadius: "50%",
              }}
            />
          }
          label={AllRoles[user.role]}
        />
      </Stack>
    </div>
  );
};

export default PreviewUser;
