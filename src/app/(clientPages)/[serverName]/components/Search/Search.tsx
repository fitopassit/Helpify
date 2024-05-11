import { TextField } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import useDebounce from "@/app/hooks/useDebounce";

import styles from "./Search.module.css";

interface SearchProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<SearchProps> = ({ setSearchValue }) => {
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 250);

  const onChange = useCallback(
    (params: ChangeEvent<HTMLInputElement>) => setValue(params.target.value),
    [],
  );

  useEffect(() => setSearchValue(debounceValue), [debounceValue]);

  return (
    <div className={styles.inputContainer}>
      <div style={{ display: "flex", gap: "4px" }}>
        <TextField
          onChange={onChange}
          color={"primary"}
          hiddenLabel
          size={"small"}
          placeholder="Найти название или номер статьи"
          fullWidth
          autoFocus
          autoComplete={"off"}
        />
      </div>
    </div>
  );
};
