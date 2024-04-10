import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import { FC, useMemo } from "react";

import { IAllCodexes, TAllNameCodexes } from "@/app/types/types";
import { codexesLink, codexesNames } from "@/app/utils/contants";
import { mockData2 } from "@/app/utils/mockData/mockData";
import { getObjectKeyByValue, matchData } from "@/app/utils/utils";

import { ItemCodex } from "../ItemCodex/";
import styles from "./ListCodex.module.css";

interface ListCodexProps {
  selectedCodex: IAllCodexes;
  searchValue: string;
}

export const ListCodex: FC<ListCodexProps> = ({
  selectedCodex,
  searchValue,
}) => {
  const selectedCodexArray = useMemo(
    () => Object.entries(selectedCodex).filter(([_, value]) => value),
    [selectedCodex],
  );

  const codexes = useMemo(
    () => matchData(searchValue, mockData2, getObjectKeyByValue(selectedCodex)),
    [searchValue, selectedCodex],
  );

  const hasFoundCodexes = Object.keys(codexes || {}) as TAllNameCodexes[];

  if (selectedCodexArray.length >= 1 && !searchValue) {
    return (
      <div className={styles.noContentContainer}>
        <Typography variant={"body1"}>Введите значение в поиск</Typography>
      </div>
    );
  }

  if (!Object.values(selectedCodex).some((value) => value)) {
    return (
      <div className={styles.noContentContainer}>
        <Typography variant={"body1"}>
          Для осуществления поиска выберите нужный вам кодекс
        </Typography>
      </div>
    );
  }

  if (
    Object.values(selectedCodex).some((value) => value) &&
    searchValue &&
    !hasFoundCodexes.length
  ) {
    return (
      <div className={styles.noContentContainer}>
        <Typography variant={"body1"}>Ничего не найдено :(</Typography>
      </div>
    );
  }

  return (
    <>
      {hasFoundCodexes.map((codex) => {
        const chapters = Object.values(codexes[codex]);

        return chapters.length ? (
          <section className={styles.list} key={codex}>
            <Typography variant={"h5"}>
              <span className={styles.titleCodex}>
                <span>{codexesNames[codex]}</span>
                <IconButton
                  component={Link}
                  href={codexesLink[codex]}
                  sx={{ display: "flex", alignItems: "center" }}
                  target={"_blank"}
                  color={"primary"}
                >
                  <OpenInNewIcon />
                </IconButton>
              </span>
            </Typography>
            {chapters.map((item, i) => {
              return (
                <div key={`${codex}_${item.title}_${i}`}>
                  {item.title && (
                    <Typography variant={"h5"}>
                      <span className={styles.chapter}>{item.title}</span>
                    </Typography>
                  )}
                  <Stack>
                    <ItemCodex articles={item.data} searchValue={searchValue} />
                  </Stack>
                </div>
              );
            })}
          </section>
        ) : null;
      })}
    </>
  );
};
