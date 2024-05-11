import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useCallback, useEffect } from "react";

import { IAllCodexes } from "@/app/types/types";
import {
  ADMINISTRATIVE_CODE,
  CODE_OF_ETHICS,
  codexesNamesShorted,
  CONSTITUTION,
  CRIMINAL_CODE,
  FINANCE_CODE,
  HIGHWAY_CODE,
  JUDICIAL_CODE,
  LABOR_LAW,
  AIR_CODE,
  CODE_OF_PRACTICE,
  ON_PUBLIC_SERVICE,
  COLLEGIUM_ADVOCATES,
  STATUS_PROSECUTORS,
  BYLAWS_FBI,
  BYLAWS_EMS,
} from "@/app/utils/contants";

import styles from "./FilterCodex.module.css";

//TODO Сбрасываются состояние кодексков которых не было в списке, но по ним производился поиск, после 10.04.2024 можно удалить функцию и useEffect
const resetCodex = () => {
  localStorage.setItem(ON_PUBLIC_SERVICE, String(false));
  localStorage.setItem(COLLEGIUM_ADVOCATES, String(false));
  localStorage.setItem(STATUS_PROSECUTORS, String(false));
  localStorage.setItem(BYLAWS_FBI, String(false));
  localStorage.setItem(BYLAWS_EMS, String(false));
};

interface FilterCodexProps {
  selectedCodex: IAllCodexes;
  changeSelectedCodex: any;
  setSelectedCodex: Dispatch<SetStateAction<IAllCodexes>>;
}

export const FilterCodex: FC<FilterCodexProps> = ({
  selectedCodex,
  changeSelectedCodex,
  setSelectedCodex,
}) => {
  const onChangeChecked = useCallback(
    (name: string, value: boolean) => {
      localStorage.setItem(name, String(value));
      changeSelectedCodex({ ...selectedCodex, [name]: value });
    },
    [selectedCodex, changeSelectedCodex],
  );

  const onSelectAllCheckbox = useCallback(() => {
    for (const codex of Object.keys(selectedCodex)) {
      localStorage.setItem(codex, String(true));
      setSelectedCodex((prevState) => ({ ...prevState, [codex]: true }));
    }
  }, [selectedCodex, setSelectedCodex]);

  const onResetAllCheckbox = useCallback(() => {
    for (const codex of Object.keys(selectedCodex)) {
      localStorage.setItem(codex, String(false));
      setSelectedCodex((prevState) => ({ ...prevState, [codex]: false }));
    }
  }, [selectedCodex, setSelectedCodex]);

  useEffect(() => {
    resetCodex();
  }, []);

  return (
    <aside className={styles.container}>
      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        <Button onClick={onResetAllCheckbox}>Сбросить все</Button>
        <Button onClick={onSelectAllCheckbox}>Выделить все</Button>
      </FormGroup>
      <FormGroup>
        <Typography variant={"h5"} style={{ padding: "4px 4px 4px" }}>
          Кодексы штата
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(CONSTITUTION, !selectedCodex[CONSTITUTION])
              }
              checked={selectedCodex[CONSTITUTION]}
            />
          }
          label={codexesNamesShorted[CONSTITUTION]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(CRIMINAL_CODE, !selectedCodex[CRIMINAL_CODE])
              }
              checked={selectedCodex[CRIMINAL_CODE]}
            />
          }
          label={codexesNamesShorted[CRIMINAL_CODE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(
                  CODE_OF_PRACTICE,
                  !selectedCodex[CODE_OF_PRACTICE],
                )
              }
              checked={selectedCodex[CODE_OF_PRACTICE]}
            />
          }
          label={codexesNamesShorted[CODE_OF_PRACTICE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(
                  ADMINISTRATIVE_CODE,
                  !selectedCodex[ADMINISTRATIVE_CODE],
                )
              }
              checked={selectedCodex[ADMINISTRATIVE_CODE]}
            />
          }
          label={codexesNamesShorted[ADMINISTRATIVE_CODE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(HIGHWAY_CODE, !selectedCodex[HIGHWAY_CODE])
              }
              checked={selectedCodex[HIGHWAY_CODE]}
            />
          }
          label={codexesNamesShorted[HIGHWAY_CODE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(CODE_OF_ETHICS, !selectedCodex[CODE_OF_ETHICS])
              }
              checked={selectedCodex[CODE_OF_ETHICS]}
            />
          }
          label={codexesNamesShorted[CODE_OF_ETHICS]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(FINANCE_CODE, !selectedCodex[FINANCE_CODE])
              }
              checked={selectedCodex[FINANCE_CODE]}
            />
          }
          label={codexesNamesShorted[FINANCE_CODE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(JUDICIAL_CODE, !selectedCodex[JUDICIAL_CODE])
              }
              checked={selectedCodex[JUDICIAL_CODE]}
            />
          }
          label={codexesNamesShorted[JUDICIAL_CODE]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(LABOR_LAW, !selectedCodex[LABOR_LAW])
              }
              checked={selectedCodex[LABOR_LAW]}
            />
          }
          label={codexesNamesShorted[LABOR_LAW]}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() =>
                onChangeChecked(AIR_CODE, !selectedCodex[AIR_CODE])
              }
              checked={selectedCodex[AIR_CODE]}
            />
          }
          label={codexesNamesShorted[AIR_CODE]}
        />
      </FormGroup>
      {/*<FormGroup>*/}
      {/*  <Typography variant={'h5'} style={{ padding: '20px 4px 4px' }}>*/}
      {/*    Законы штата*/}
      {/*  </Typography>*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onClick={() => onChangeChecked(ON_PUBLIC_SERVICE, !selectedCodex[ON_PUBLIC_SERVICE])}*/}
      {/*        checked={selectedCodex[ON_PUBLIC_SERVICE]}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    label={codexesNamesShorted[ON_PUBLIC_SERVICE]}*/}
      {/*  />*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onClick={() => onChangeChecked(STATUS_PROSECUTORS, !selectedCodex[STATUS_PROSECUTORS])}*/}
      {/*        checked={selectedCodex[STATUS_PROSECUTORS]}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    label={codexesNamesShorted[STATUS_PROSECUTORS]}*/}
      {/*  />*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onClick={() => onChangeChecked(COLLEGIUM_ADVOCATES, !selectedCodex[COLLEGIUM_ADVOCATES])}*/}
      {/*        checked={selectedCodex[COLLEGIUM_ADVOCATES]}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    label={codexesNamesShorted[COLLEGIUM_ADVOCATES]}*/}
      {/*  />*/}
      {/*</FormGroup>*/}

      {/*<FormGroup>*/}
      {/*  <Typography variant={'h5'} style={{ padding: '20px 4px 4px' }}>*/}
      {/*    Уставы*/}
      {/*  </Typography>*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onClick={() => onChangeChecked(BYLAWS_FBI, !selectedCodex[BYLAWS_FBI])}*/}
      {/*        checked={selectedCodex[BYLAWS_FBI]}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    label={codexesNamesShorted[BYLAWS_FBI]}*/}
      {/*  />*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onClick={() => onChangeChecked(BYLAWS_EMS, !selectedCodex[BYLAWS_EMS])}*/}
      {/*        checked={selectedCodex[BYLAWS_EMS]}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    label={codexesNamesShorted[BYLAWS_EMS]}*/}
      {/*  />*/}
      {/*</FormGroup>*/}
    </aside>
  );
};
