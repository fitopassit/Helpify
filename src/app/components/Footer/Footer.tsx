import TelegramIcon from "@mui/icons-material/Telegram";
import { IconButton, Link, Typography } from "@mui/material";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Typography variant={"body2"}>
          UPD: <strong>31.03.2024</strong>
        </Typography>
        <div className={styles.createdByContainer}>
          <Typography variant={"body2"}>Created by: Kettel</Typography>
          <IconButton
            component={Link}
            target={"_blank"}
            href={"https://t.me/kettel31"}
            rel="noreferrer"
          >
            <TelegramIcon sx={{ color: "#0088cc" }} />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};
