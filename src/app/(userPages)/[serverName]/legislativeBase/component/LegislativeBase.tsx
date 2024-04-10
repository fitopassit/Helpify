import { Link, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import {
  ADMINISTRATIVE_CODE,
  BYLAWS_EMS,
  BYLAWS_FBI,
  BYLAWS_GOV,
  BYLAWS_LSPD,
  BYLAWS_SHERIF,
  BYLAWS_SANG,
  BYLAWS_WZ,
  FINANCE_CODE,
  CIRCULATION_OF_WEAPONS_AND_STATE,
  CLOSED_TERRITORIES,
  CODE_OF_ETHICS,
  codexesLink,
  codexesNames,
  COLLEGIUM_ADVOCATES,
  CRIMINAL_CODE,
  HIGHWAY_CODE,
  IMMUNITY_PUBLIC_OFFICIALS,
  JUDICIAL_CODE,
  LABOR_LAW,
  LAW_STATE_SECRET,
  ON_PUBLIC_SERVICE,
  GOS_DOC,
  STATUS_ACT_FIB,
  STATUS_ACT_SANG,
  STATUS_USSS,
  STATUS_PROSECUTORS,
  CONSTITUTION,
  REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS,
  REGISTRY_COLLECTOR_GUN,
  AIR_CODE,
  REGULATIONS_ATTORNEY_OFFICE,
  SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES,
  DEPARTMENT_OF_JUSTICE_WARRANTS,
  CODE_OF_PRACTICE,
  JURISDICTION_STATE,
  STATUS_EMS,
  GOVERNOR_CABINET,
  POLICE_ACTIVITY,
  ANIMAL_DEF,
  STATUS_WZ,
} from "@/app/utils/contants";

import googleSheet from "../../../../../../public/icons/google_sheet-icon.png";
import styles from "./LegislativeBase.module.css";

const LegislativeBase = () => {
  return (
    <>
      <Typography>
        <i>Обновлено от 29.03.2024</i>
      </Typography>
      <div className={styles.container}>
        <div>
          <div className={styles.innerContainer}>
            <Typography variant={"h5"}>Кодексы штата</Typography>
            <Link target={"_blank"} href={codexesLink[CONSTITUTION]}>
              <Typography variant={"body1"}>
                {codexesNames[CONSTITUTION]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[CRIMINAL_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[CRIMINAL_CODE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[HIGHWAY_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[HIGHWAY_CODE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[ADMINISTRATIVE_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[ADMINISTRATIVE_CODE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[LABOR_LAW]}>
              <Typography variant={"body1"}>
                {codexesNames[LABOR_LAW]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[JUDICIAL_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[JUDICIAL_CODE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[CODE_OF_ETHICS]}>
              <Typography variant={"body1"}>
                {codexesNames[CODE_OF_ETHICS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[FINANCE_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[FINANCE_CODE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[CODE_OF_PRACTICE]}>
              <Typography variant={"body1"}>
                {codexesNames[CODE_OF_PRACTICE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[AIR_CODE]}>
              <Typography variant={"body1"}>
                {codexesNames[AIR_CODE]}
              </Typography>
            </Link>
          </div>

          <div className={styles.innerContainer}>
            <Typography variant={"h5"}>Законы штата</Typography>
            <Link target={"_blank"} href={codexesLink[COLLEGIUM_ADVOCATES]}>
              <Typography variant={"body1"}>
                {codexesNames[COLLEGIUM_ADVOCATES]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_PROSECUTORS]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_PROSECUTORS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[CLOSED_TERRITORIES]}>
              <Typography variant={"body1"}>
                {codexesNames[CLOSED_TERRITORIES]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[ON_PUBLIC_SERVICE]}>
              <Typography variant={"body1"}>
                {codexesNames[ON_PUBLIC_SERVICE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[LAW_STATE_SECRET]}>
              <Typography variant={"body1"}>
                {codexesNames[LAW_STATE_SECRET]}
              </Typography>
            </Link>
            <Link
              target={"_blank"}
              href={codexesLink[IMMUNITY_PUBLIC_OFFICIALS]}
            >
              <Typography variant={"body1"}>
                {" "}
                {codexesNames[IMMUNITY_PUBLIC_OFFICIALS]}
              </Typography>
            </Link>
            <Link
              target={"_blank"}
              href={codexesLink[CIRCULATION_OF_WEAPONS_AND_STATE]}
            >
              <Typography variant={"body1"}>
                {codexesNames[CIRCULATION_OF_WEAPONS_AND_STATE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_ACT_FIB]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_ACT_FIB]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_ACT_SANG]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_ACT_SANG]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_USSS]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_USSS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_EMS]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_EMS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[STATUS_WZ]}>
              <Typography variant={"body1"}>
                {codexesNames[STATUS_WZ]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[GOS_DOC]}>
              <Typography variant={"body1"}>{codexesNames[GOS_DOC]}</Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[JURISDICTION_STATE]}>
              <Typography variant={"body1"}>
                {codexesNames[JURISDICTION_STATE]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[GOVERNOR_CABINET]}>
              <Typography variant={"body1"}>
                {codexesNames[GOVERNOR_CABINET]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[POLICE_ACTIVITY]}>
              <Typography variant={"body1"}>
                {codexesNames[POLICE_ACTIVITY]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[ANIMAL_DEF]}>
              <Typography variant={"body1"}>
                {codexesNames[ANIMAL_DEF]}
              </Typography>
            </Link>
          </div>

          <div className={styles.innerContainer}>
            <Typography variant={"h5"}>Уставы</Typography>
            <Link target={"_blank"} href={codexesLink[BYLAWS_LSPD]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_LSPD]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_EMS]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_EMS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_SHERIF]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_SHERIF]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_GOV]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_GOV]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_FBI]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_FBI]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_SANG]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_SANG]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[BYLAWS_WZ]}>
              <Typography variant={"body1"}>
                {codexesNames[BYLAWS_WZ]}
              </Typography>
            </Link>
          </div>
        </div>
        <div>
          <div
            className={classNames(styles.innerContainer, styles.googleSheet)}
          >
            <Typography variant={"h5"}>Реестры</Typography>
            <Link
              target={"_blank"}
              href={codexesLink[REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS]}
            >
              <Image
                alt="гугл таблица"
                src={googleSheet}
                className={styles.googleSheetIcon}
                width={10}
                height={10}
              />
              <Typography variant={"body1"}>
                {codexesNames[REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS]}
              </Typography>
            </Link>
            <Link target={"_blank"} href={codexesLink[REGISTRY_COLLECTOR_GUN]}>
              <Image
                alt="гугл таблица"
                src={googleSheet}
                className={styles.googleSheetIcon}
                width={10}
                height={10}
              />
              <Typography variant={"body1"}>
                {codexesNames[REGISTRY_COLLECTOR_GUN]}
              </Typography>
            </Link>
            {/*<Link target={'_blank'} href={codexesLink[REGISTRY_LICENSE_CANNABIS]}>*/}
            {/*  <img alt={'гугл таблица'} src={googleSheet} className={styles.googleSheetIcon} />*/}
            {/*  <Typography variant={'body1'}>{codexesNames[REGISTRY_LICENSE_CANNABIS]}</Typography>*/}
            {/*</Link>*/}
            {/*<Link target={'_blank'} href={codexesLink[REGISTRY_LICENSE_PARAMEDIC]}>*/}
            {/*  <img alt={'гугл таблица'} src={googleSheet} className={styles.googleSheetIcon} />*/}
            {/*  <Typography variant={'body1'}>{codexesNames[REGISTRY_LICENSE_PARAMEDIC]}</Typography>*/}
            {/*</Link>*/}
          </div>

          {/*<div className={classNames(styles.innerContainer, styles.googleSheet)}>*/}
          {/*  <Typography variant={'h5'}>Памятки</Typography>*/}
          {/*  <Link target={'_blank'} href={codexesLink[CHECKLIST_CODE_OF_PRACTICE]}>*/}
          {/*    <img alt={'гугл таблица'} src={googleSheet} className={styles.googleSheetIcon} />*/}
          {/*    <Typography variant={'body1'}>*/}
          {/*      {codexesNames[CHECKLIST_CODE_OF_PRACTICE]} <i>(by Kettel)</i>*/}
          {/*    </Typography>*/}
          {/*  </Link>*/}

          {/*  <Link target={'_blank'} href={codexesLink[CHECKLIST_ADVOCATES]}>*/}
          {/*    <img alt={'гугл таблица'} src={googleSheet} className={styles.googleSheetIcon} />*/}
          {/*    <Typography variant={'body1'}>*/}
          {/*      {codexesNames[CHECKLIST_ADVOCATES]} <i>(by K1mari)</i>*/}
          {/*    </Typography>*/}
          {/*  </Link>*/}
          {/*</div>*/}

          <div className={styles.innerContainer}>
            <Link
              target={"_blank"}
              href={codexesLink[REGULATIONS_ATTORNEY_OFFICE]}
            >
              <Typography variant={"body1"}>
                {codexesNames[REGULATIONS_ATTORNEY_OFFICE]}
              </Typography>
            </Link>
            <Link
              target={"_blank"}
              href={codexesLink[SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES]}
            >
              <Typography variant={"body1"}>
                {codexesNames[SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES]}
              </Typography>
            </Link>
            <Link
              target={"_blank"}
              href={codexesLink[DEPARTMENT_OF_JUSTICE_WARRANTS]}
            >
              <Typography variant={"body1"}>
                {codexesNames[DEPARTMENT_OF_JUSTICE_WARRANTS]}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegislativeBase;
