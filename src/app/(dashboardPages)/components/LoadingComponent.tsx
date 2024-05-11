import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingComponent = () => {
  return (
    <Box>
      <Typography variant={"h5"}>
        {getRandomLoadingMessage()}
        <CircularProgress size={24} />
      </Typography>
    </Box>
  );
};

const getRandomLoadingMessage = () => {
  const loadingMessages = [
    "Подготовка данных для отображения...",
    "Пожалуйста, ожидайте. Происходит загрузка данных...",
    "Загрузка данных. Не выключайте страницу...",
    "Мы получаем необходимую информацию...",
    "Подготовка к работе. Пожалуйста, подождите...",
    "Идет загрузка данных. Ваше терпение ценно для нас.",
    "Загрузка в процессе. Секундочку...",
    "Мы работаем над загрузкой данных. Пожалуйста, подождите...",
    "",
  ];

  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomIndex];
};

export default LoadingComponent;
