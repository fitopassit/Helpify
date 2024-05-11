"use client";

import { Chip, List, Stack } from "@mui/material";
import { User } from "@prisma/client";
import { useState } from "react";

import styles from "@/app/(dashboardPages)/components/Users/PreviewUser.module.css";
import { UserItem } from "./UserItem";

type TypeValue = "AllUsers" | "Active" | "NonActive";

interface TypeFilters {
  label: "Все" | "Активные" | "Деактивированные";
  value: TypeValue;
}

const allFilters: TypeFilters[] = [
  { label: "Все", value: "AllUsers" },
  {
    label: "Активные",
    value: "Active",
  },
  { label: "Деактивированные", value: "NonActive" },
];
const FilterUsers = ({ users }: { users: User[] }) => {
  const [activeFilter, setActiveFilter] = useState<TypeValue>("AllUsers");

  const filteredRoles = users.filter((user) => {
    switch (activeFilter) {
      case "AllUsers":
        return user;
      case "Active":
        return user.active;
      case "NonActive":
        return !user.active;
      default:
        return user;
    }
  });
  const getUpdateFiltersHandler = (filter: TypeValue) => () => {
    setActiveFilter(filter);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
        {allFilters.map((filter) => (
          <Chip
            key={filter.label}
            color={activeFilter === filter.value ? "primary" : "default"}
            variant={activeFilter === filter.value ? "filled" : "outlined"}
            label={filter.label}
            onClick={getUpdateFiltersHandler(filter.value)}
          />
        ))}
      </Stack>
      <List disablePadding className={styles.list}>
        {filteredRoles.map((user) => {
          return <UserItem key={String(user.id)} user={user} />;
        })}
      </List>
    </>
  );
};

export default FilterUsers;
