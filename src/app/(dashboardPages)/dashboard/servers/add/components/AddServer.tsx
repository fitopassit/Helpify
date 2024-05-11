"use client";

import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createServer } from "@/app/models/users";


const AddServer = () => {
  const [state, setState] = useState({
    name: "",
  });
  const router = useRouter();

  const onChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  return (
    <form action={createServer}>
      <input type="hidden" name="role" value={"Admin"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant={"h4"} sx={{ marginBottom: 2 }}>
          Добавить администратора
        </Typography>
        <FormControl sx={{ marginBottom: 2, minWidth: 350, maxWidth: 350 }}>
          <TextField
            name={"name"}
            onChange={onChangeState}
            size={"small"}
            label={"Имя сервера"}
            value={state.name}
          />
        </FormControl>
        <Button
          onClick={
          () => {
            //TODO: Исправить
            setTimeout(() => router.replace("/dashboard/servers"), 50);
          }}
          type={"submit"}
        >
          Создать
        </Button>
      </Box>
    </form>
  );
};

export default AddServer;
