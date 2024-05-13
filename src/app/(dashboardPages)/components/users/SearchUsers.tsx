import { TextField } from "@mui/material";

const SearchUsers = () => {
  return (
    <TextField
      id="search"
      sx={{
        width: "450px",
        label: { color: "white" },
        input: { color: "white" },
        fieldset: { border: 0 },
      }}
      InputLabelProps={{ shrink: false }}
      label={"Введите имя пользователя"}
      // onChange={(e) => {
      //   setCities(e.target.value);
      // {/*}}*/}
      // onKeyUp={(e) => {
      //   if (e.key === "Enter") {
      //     navigate(`/${cities}`);
      //>
      //}}
    />
  );
};

export default SearchUsers;