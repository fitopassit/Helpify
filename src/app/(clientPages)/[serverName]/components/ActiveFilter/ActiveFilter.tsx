import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { FC, SyntheticEvent, useCallback } from "react";

import { IAllCodexes, TAllNameCodexes } from "../../types/types";
import { codexesNames } from "../../utils/constants";

interface ActiveFilterProps {
  codex: TAllNameCodexes;
  selectedCodex: IAllCodexes;
  changeSelectedCodex: any;
}

export const ActiveFilter: FC<ActiveFilterProps> = ({
  codex,
  selectedCodex,
  changeSelectedCodex,
}) => {
  const onDeleteFilter = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      localStorage.setItem(event.currentTarget.name, String(false));
      changeSelectedCodex({
        ...selectedCodex,
        [event.currentTarget.name]: false,
      });
    },
    [selectedCodex],
  );

  return (
    <span style={{ marginRight: 4, display: "flex" }}>
      {`${codexesNames[codex]}`}
      <IconButton
        name={codex}
        disableRipple
        color={"primary"}
        size={"small"}
        onClick={onDeleteFilter}
      >
        <CloseIcon sx={{ fontSize: 10 }} />
      </IconButton>
    </span>
  );
};
