import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { User } from "@prisma/client";
import React from "react";

import styles from "@/app/(dashboardPages)/components/Users/PreviewUser.module.css";

const PreviewUser = ({
  dispatcher,
  onChangeMode,
}: {
  dispatcher: User;
  onChangeMode: (state: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Avatar variant="rounded">{dispatcher.name}</Avatar>
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
          <Typography fontWeight={700}>{dispatcher.name}</Typography>
          {/*<Typography>{formatPhoneNumber(dispatcher.phone)}</Typography>*/}
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
          color={dispatcher.active ? "success" : "default"}
          label={dispatcher.active ? "Активный" : "Деактивированный"}
        />
      </Stack>
    </div>
  );
};

export default PreviewUser;
