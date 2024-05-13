"use client";

import { useEffect, useState } from "react";

import { ModalWelcomeInfo } from "@/app/(clientPages)/components/Header/components/ModalWelcomeInfo";

import styles from "./CustomBadge.module.css";

export const CustomBadge = () => {
  const [openedDialogInfo, setOpenedDialogInfo] = useState(false);

  useEffect(() => {
    setOpenedDialogInfo(!localStorage.getItem("dialog10"));
  }, []);

  const changeStatus = () => {
    setOpenedDialogInfo(!openedDialogInfo);
  };

  return (
    <>
      <button onClick={changeStatus} className={styles.badge}>
        <span>Beta 1.0</span>
      </button>

      <ModalWelcomeInfo opened={openedDialogInfo} onClose={changeStatus} />
    </>
  );
};
