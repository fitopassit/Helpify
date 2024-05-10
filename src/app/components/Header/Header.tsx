import { Link, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import LogoWashington from "@/../public/washington_famaliy_logo.png";
import TabsHeader from "@/app/components/Header/components/TabsHeader/TabsHeader";
import { CustomBadge } from "../CustomBadge";
import styles from "./Header.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export const Header = async (props) => {
  // const session = await getServerSession(authOptions)
  // const user = session?.user;
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
        <div className={styles.button}>
          <TabsHeader />
        </div>
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
    </header>
  );
};
