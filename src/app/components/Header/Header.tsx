import { Link, Tab, Tabs, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { FC, memo, SyntheticEvent, useCallback, useState } from "react";

import LogoWashington from "@/../public/washington_famaliy_logo.png";
import { ModalWelcomeInfo } from "@/app/components/Header/components/ModalWelcomeInfo/";
import TabsHeader from "@/app/components/Header/components/TabsHeader/TabsHeader";
import { PATH_PAGES } from "@/app/utils/contants";

import { CustomBadge } from "../CustomBadge";
import styles from "./Header.module.css";

export const Header = memo((props) => {
  // const [opened, setOpened] = useState(false);
  // const toggleOpen = useCallback(() => setOpened(true), []);
  // const toggleClose = useCallback(() => setOpened(false), []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <section>
          <span className={styles.title}>
            <Typography variant={"h2"}>
              Majestic Help
              <span
                className={classNames(styles.flickerSlow, {
                  [styles.flickerSlowDark!]: true,
                })}
              >
                i
              </span>
              fy
            </Typography>
            <CustomBadge />
          </span>
          <Typography variant={"caption"}>Server Washington</Typography>
        </section>
        <TabsHeader />
      </div>
      <div className={styles.logo}>
        <Link href={"https://www.washington-squad.ru/"} target={"_blank"}>
          <Image
            src={LogoWashington}
            alt="Логотип семьи Washington"
            width={64}
            height={64}
          />
          <Typography variant={"body1"}>Washington FamQ</Typography>
        </Link>
      </div>

      {/*<ModalWelcomeInfo onClose={toggleClose} opened={opened} />*/}
    </header>
  );
});
