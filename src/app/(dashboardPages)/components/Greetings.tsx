"use client";

import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Greetings = ({ name }: { name: string | null | undefined }) => {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    function getDailyUniqueGreeting() {
      const currentDate = new Date().toISOString().split("T")[0];
      const lastSavedDate = window.localStorage.getItem("lastGreetingDate");

      if (currentDate !== lastSavedDate) {
        const greetings = [
          "Пусть этот рабочий день будет продуктивным и успешным!",
          "Сегодня в дашборд-панели много интересной работы!",
          "Кажется, время сделать свою магию в дашборд панели!",
          "Пусть твоя работа сегодня принесет мноооогооо результатов!",
          "Удачи и успехов во всех твоих рабочих задачах!",
          "Планирование, координация, успех - все в твоих руках!",
          "Время войти в дашборд-панель и сделать Урай лучше!",
          "Пусть все задачи сегодня будут по плечу!",
          "День начался, и у нас много работы, но мы справимся!",
          "Настройся на плодотворный день!",
          "Сегодня предоставляется отличная возможность сделать что-то удивительное!",
          "Пусть каждая задача превратится в шаг к успеху!",
          "Добро пожаловать в мир новых возможностей!",
          "Сегодняшний день — это новый шанс сделать что-то великое!",
          "Пусть каждая минута будет наполнена вдохновением и креативностью!",
          "Сегодняшний день — отличное время для креативных идей и новых решений!",
          "Пусть твои усилия принесут яркие результаты!",
          "Добро пожаловать в дашборд-панель, тут рождаются идеи!",
          "Пусть энтузиазм сегодня сопутствует твоим действиям!",
          "Пусть сегодняшний день будет полон удачных маршрутов и довольных клиентов!",
          "Сегодня вам предстоит управлять потоком пассажиров. Пусть всё идет как по маслу!",
          "Пусть ваша работа сегодня принесет море улыбок и благодарных клиентов!",
          "Удачи в обеспечении комфортной поездки для наших пассажиров!",
          "Сегодняшний день - это возможность обеспечить пассажирам лучший опыт перевозки!",
          "Пусть каждая задача связанная с клиентами станет шагом к успешным поездкам!",
          "День только начался, и перед нами много вызовов, но мы справимся вместе!",
          "Пусть каждая минута вашей работы будет наполнена заботой о клиентах и качеством услуг!",
          "Пусть ваши усилия приведут к довольным клиентам и плавным маршрутам!",
        ];
        const randomIndex = Math.floor(Math.random() * greetings.length);

        const greeting = greetings[randomIndex]!;

        window.localStorage.setItem("lastGreetingDate", currentDate!);
        window.localStorage.setItem("lastGreeting", greeting);

        return greeting;
      } else {
        return window.localStorage.getItem("lastGreeting");
      }
    }

    setGreeting(getDailyUniqueGreeting());
  }, []);

  return (
    <div>
      <Typography sx={{ marginBottom: 1 }} variant={"h4"}>
        Привет, {name}!
      </Typography>
      <Typography variant={"body2"}>
        {greeting ? greeting : <CircularProgress size={20} />}
      </Typography>
    </div>
  );
};

export default Greetings;
