"use client";

import { User } from "@prisma/client";
import React from "react";

import { addUser } from "@/app/models/user";

const AddUser = ({ users }: { users: User[] }) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          void addUser().then(() => {
            console.warn("user Create");
          });
        }}
      >
        <button>AddUser</button>
      </form>
      <ul>
        {users.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
    </>
  );
};

export default AddUser;
