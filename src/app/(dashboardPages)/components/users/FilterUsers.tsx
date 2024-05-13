"use client";
import { useState } from "react";
import { List, Stack } from "@mui/material";
import { Role, User } from "@prisma/client";

import styles from "@/app/(dashboardPages)/components/users/PreviewUser.module.css";
import UserFilterByRoles from "@/app/(dashboardPages)/components/users/UserFilterByRoles";

import { UserItem } from "./UserItem";

type ValueType = keyof typeof Role;

interface TypeFilters {
  label: "Администрация" | "Куратор" | "Редактор" | "Обычный пользователь";
  value: ValueType;
}

const allFilters: TypeFilters[] = [
  {
    label: "Администрация",
    value: "Admin",
  },
  { label: "Кураторы", value: "Curator" },
  { label: "Редакторы", value: "Editor" },
  { label: "Обычные пользователи", value: "User" },
];

export function FilterUsers({ users }: { users: User[] }) {
  const [activeFilter, setActiveFilter] = useState<ValueType | "All">("All");
  const getUpdateFiltersHandler = (filter: ValueType | "All") => () => {
    setActiveFilter(filter);
  };
  const filteredUsers = users.filter((user) => {
    switch (activeFilter) {
      case "All":
        return user;
      case "Admin":
        return user.role === "Admin";
      case "Curator":
        return user.role === "Curator";
      case "Editor":
        return user.role === "Editor";
      case "User":
        return user.role === "User";
      default:
        return user;
    }
  });
  return (
    <>
      <Stack direction="row" spacing={1} sx={{ marginBottom: 2, marginTop:2 }}>
        <UserFilterByRoles allFilters={allFilters} activeFilter={activeFilter} getUpdateFiltersHandler={getUpdateFiltersHandler} />
      </Stack>
      <List disablePadding className={styles.list}>
        {filteredUsers.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </List>
    </>
  );
}

export default FilterUsers;
