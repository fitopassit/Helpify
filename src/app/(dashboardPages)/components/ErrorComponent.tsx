import { Button, Typography } from "@mui/material";
import React from "react";

const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <>
      <Typography variant={"h4"}>Произошла ошибка</Typography>
      <Typography variant={"body2"}>
        Чтобы понять что пошло не так,{" "}
        <strong>запомните шаги которые вы сделали и что нажали</strong>,
        сфотографируйте данный экран отправьте это администратору и опишите
        действия которые привели к ошибке.
      </Typography>
      <pre style={{ padding: "12px", background: "#f4f4f4" }}>{error.name}</pre>
      <pre style={{ padding: "12px", background: "#f4f4f4" }}>
        {error.message}
      </pre>
      <Button variant="outlined" color="error" onClick={reset}>
        Попробовать еще раз
      </Button>
    </>
  );
};

export default ErrorComponent;
