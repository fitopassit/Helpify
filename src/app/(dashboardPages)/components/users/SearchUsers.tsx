"use client";

import { TextField } from "@mui/material";
import { User } from "@prisma/client";
import React, { ChangeEvent, useState } from "react";

import FilterUsers from "@/app/(dashboardPages)/components/users/FilterUsers";

const SearchUsers = ({ users }: { users: User[] }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeText = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchQuery(e.target.value);
    const results = users.filter(({ name }) =>
      name!.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredUsers(results);
  };
  return (
    <>
      <TextField
        id="search"
        sx={{
          width: "450px",
          label: { color: "white" },
          input: { color: "white" },
          fieldset: { border: 0 },
        }}
        label={"Введите имя пользователя"}
        value={searchQuery}
        onChange={onChangeText}
      />
      <FilterUsers users={filteredUsers} />
    </>
  );
};

export default SearchUsers;
