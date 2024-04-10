"use client";

import { memo, useCallback, useState } from "react";

import { IAllCodexes } from "@/app/types/types";
import {
  ADMINISTRATIVE_CODE,
  AIR_CODE,
  CODE_OF_ETHICS,
  CODE_OF_PRACTICE,
  CONSTITUTION,
  CRIMINAL_CODE,
  FINANCE_CODE,
  HIGHWAY_CODE,
  JUDICIAL_CODE,
  LABOR_LAW,
} from "@/app/utils/contants";
import { stringConversionToBoolean } from "@/app/utils/utils";

import { FilterCodex } from "../FilterCodex";
import { ListCodex } from "../ListCodex/";
import { Search } from "../Search/";
import styles from "./SurveyComponent.module.css";

export const SearchComponent = memo(() => {
  const [selectedCodex, setSelectedCodex] = useState({
    [CRIMINAL_CODE]: stringConversionToBoolean(
      localStorage.getItem(CRIMINAL_CODE) || "true",
    ),
    [ADMINISTRATIVE_CODE]: stringConversionToBoolean(
      localStorage.getItem(ADMINISTRATIVE_CODE) || "true",
    ),
    [CODE_OF_ETHICS]: stringConversionToBoolean(
      localStorage.getItem(CODE_OF_ETHICS) || "true",
    ),
    [HIGHWAY_CODE]: stringConversionToBoolean(
      localStorage.getItem(HIGHWAY_CODE) || "true",
    ),
    [JUDICIAL_CODE]: stringConversionToBoolean(
      localStorage.getItem(JUDICIAL_CODE) || "true",
    ),
    [CONSTITUTION]: stringConversionToBoolean(
      localStorage.getItem(CONSTITUTION) || "true",
    ),
    [FINANCE_CODE]: stringConversionToBoolean(
      localStorage.getItem(FINANCE_CODE) || "true",
    ),
    [LABOR_LAW]: stringConversionToBoolean(
      localStorage.getItem(LABOR_LAW) || "true",
    ),
    [AIR_CODE]: stringConversionToBoolean(
      localStorage.getItem(AIR_CODE) || "true",
    ),
    [CODE_OF_PRACTICE]: stringConversionToBoolean(
      localStorage.getItem(CODE_OF_PRACTICE) || "true",
    ),
  });

  const [searchValue, setSearchValue] = useState("");

  const changeSelectedCodex = useCallback((codexes: IAllCodexes) => {
    setSelectedCodex(codexes);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <FilterCodex
          changeSelectedCodex={changeSelectedCodex}
          selectedCodex={selectedCodex}
          setSelectedCodex={setSelectedCodex}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Search setSearchValue={setSearchValue} />
        <ListCodex selectedCodex={selectedCodex} searchValue={searchValue} />
      </div>
    </div>
  );
});
