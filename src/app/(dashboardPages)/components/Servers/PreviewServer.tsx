import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Server } from "@prisma/client";
import React from "react";

import styles from "@/app/(dashboardPages)/components/Users/PreviewUser.module.css";

const PreviewServer = ({
                         server,
  onChangeMode,
}: {
  server: Server;
  onChangeMode: (state: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Avatar variant="rounded">{server.name}</Avatar>
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
          <Typography fontWeight={700}>{server.name}</Typography>
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
    </div>
  );
};

export default PreviewServer;
