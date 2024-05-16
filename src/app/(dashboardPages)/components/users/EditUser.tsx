import SaveIcon from "@mui/icons-material/Save";
import { Alert, Box, Chip, Dialog, DialogContent, DialogTitle, Divider, FormHelperText, Stack, Switch, TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { User } from "@prisma/client";
import React from "react";



const EditUser = ({
  onSaveChange,
  setState,
  openModal,
}: {
  state: {
    name: string;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
  onSaveChange: () => void;
  userId: string;
  openModal: boolean;
  userRole: User["role"];
}) => {


  return (
    <Dialog fullWidth maxWidth={"xs"} open={openModal} onClose={onSaveChange}>
      <DialogTitle>Редактирование пользователя</DialogTitle>
      <DialogContent>
        <h1>редактирование</h1>
        {/*<form*/}
        {/*  action={(fd) => {*/}
        {/*    updateUser(fd)*/}
        {/*      .then(() => {*/}
        {/*        onSaveChange();*/}
        {/*        window.location.reload();*/}
        {/*      })*/}
        {/*      .catch((e) => {*/}
        {/*        console.error(e);*/}
        {/*      });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <input type="hidden" name="id" value={String(userId)} />*/}
        {/*  <input type="hidden" name="role" value={String(userRole)} />*/}
        {/*  <Box sx={{ display: "flex", flexDirection: "column", pt: 2, pb: 2 }}>*/}


        {/*  </Box>*/}

        {/*  <Divider />*/}
        {/*  <FormHelperText sx={{ pt: 2 }}>*/}
        {/*    Состояние учетной записи*/}
        {/*  </FormHelperText>*/}

        {/*  <Stack*/}
        {/*    direction="row"*/}
        {/*    alignItems="center"*/}
        {/*    justifyContent="space-between"*/}
        {/*    sx={{ pb: 2 }}*/}
        {/*  >*/}
        {/*  </Stack>*/}

        {/*  <Box*/}
        {/*    sx={{*/}
        {/*      display: "flex",*/}
        {/*      justifyContent: "flex-end",*/}
        {/*      gap: "8px",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Button onClick={onSaveChange}>Выйти</Button>*/}

        {/*    <Button variant={"outlined"} type={"submit"} endIcon={<SaveIcon />}>*/}
        {/*      Сохранить*/}
        {/*    </Button>*/}
        {/*  </Box>*/}
        {/*</form>*/}
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
