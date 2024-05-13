"use client";

import { Chip } from "@mui/material";
import { Role } from "@prisma/client";
import { ROLE_STATUS_COLOR } from "@/app/utils/contants";

type ValueType = keyof typeof Role;

interface TypeFilters {
  label: "Администрация" | "Кураторы" | "Редакторы" | "Обычный пользователи";
  value: ValueType;
}

const UserFilterByRoles = ({
  allFilters,
  activeFilter,
  getUpdateFiltersHandler,
}: {
  allFilters: TypeFilters[];
  activeFilter: "Admin" | "Editor" | "Curator" | "User" | "All";
  getUpdateFiltersHandler: (value: ValueType | "All") => void;
}) => {
  return (
    <div>
      <Chip
        sx={{marginRight: "5px"}}
        color={activeFilter === "All" ? "primary" : "default"}
        variant={activeFilter === "All" ? "filled" : "outlined"}
        label={"Все"}
        onClick={getUpdateFiltersHandler("All")}
        clickable
      />
      {allFilters.map((filter) => (
        <Chip
          sx={{marginRight: "5px"}}
          key={filter.label}
          color={filter.value == activeFilter ? "primary" : "default"}
          variant={filter.value == activeFilter ? "filled" : "outlined"}
          label={filter.label}
          icon={
            <span
              style={{
                background: ROLE_STATUS_COLOR[filter.value as ValueType],
                height: "12px",
                width: "12px",
                borderRadius: "50%",
              }}
            />
          }
          onClick={getUpdateFiltersHandler(filter.value)}
        />
      ))}
    </div>
  );
};

export default UserFilterByRoles;
