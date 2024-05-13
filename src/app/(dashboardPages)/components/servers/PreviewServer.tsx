import { CardContent, Typography, Card } from "@mui/material";
import { Server } from "@prisma/client";
import React from "react";

import ServerLogo from "@/app/(dashboardPages)/components/servers/ServerLogo";
import styles from "@/app/(dashboardPages)/components/servers/PreviewServer.module.css";

const PreviewServer = ({ server }: { server: Server }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Card sx={{ borderRadius: "8px" }}>
          <CardContent
            sx={{ background: "#212121", borderRadius: "0 0 8px 8px", display: 'flex', justifyContent: 'space-between'}}
          >
            <Typography variant="h5" fontWeight={700}>
              {server.name}
            </Typography>
            <ServerLogo name={server.name} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreviewServer;
