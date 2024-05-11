"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// import { MaskInput } from "@/app/components/MaskInput";
// import { createUser } from "@/app/models/users";

const AddUser = () => {
  // const [state, setState] = useState({
  //   phone: "",
  //   name: "",
  // });
  //
  // const router = useRouter();
  //
  // const onChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((prevState) => {
  //     return { ...prevState, [event.target.name]: event.target.value };
  //   });
  // };

  return (
    <h1>Добавление админа</h1>
    // <form action={createUser}>
    //   <input type="hidden" name="role" value={"Admin"} />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "flex-start",
    //     }}
    //   >
    //     <Typography variant={"h4"} sx={{ marginBottom: 2 }}>
    //       Добавить администратора
    //     </Typography>
    //     <FormControl sx={{ marginBottom: 2, minWidth: 350, maxWidth: 350 }}>
    //       <TextField
    //         name={"name"}
    //         onChange={onChangeState}
    //         size={"small"}
    //         label={"Имя администратора"}
    //         value={state.name}
    //       />
    //     </FormControl>
    //     <FormControl sx={{ marginBottom: 2, minWidth: 350, maxWidth: 350 }}>
    //       <MaskInput
    //         mask={"+7 (999) 999-99-99"}
    //         label={"Номер телефона"}
    //         size={"small"}
    //         name={"phone"}
    //         onChange={onChangeState}
    //         value={state.phone}
    //       />
    //       <FormHelperText>
    //         На номер телефона придут логин и пароль от входа в дашборд панель
    //       </FormHelperText>
    //     </FormControl>
    //     <Button
    //       onClick={() => {
    //         //TODO: Исправить
    //         setTimeout(() => router.replace("/dashboard/admins"), 50);
    //       }}
    //       type={"submit"}
    //     >
    //       Создать
    //     </Button>
    //   </Box>
    // </form>
  );
};

export default AddUser;
