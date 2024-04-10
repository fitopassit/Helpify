"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ReactNode, useCallback, useState } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box>{children}</Box>}</div>;
}

export const ModalWelcomeInfo = ({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState(10);

  const handleChange = useCallback((_: any, newValue: number) => {
    setActiveTab(newValue);
  }, []);

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            padding: "12px",
          },
        }}
        open={opened}
        onClose={onClose}
      >
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="0.1" value={1} />
          <Tab label="0.2" value={2} />
          <Tab label="0.3" value={3} />
          <Tab label="0.4" value={4} />
          <Tab label="0.5" value={5} />
          <Tab label="0.6" value={6} />
          <Tab label="0.7" value={7} />
          <Tab label="0.8.1" value={81} />
          <Tab label="0.8.2" value={82} />
          <Tab label="0.8.3" value={83} />
          <Tab label="0.9" value={9} />
          <Tab label="1.0" value={10} />
        </Tabs>
        <TabPanel index={1} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.1</Typography>
            <Typography variant={"body1"}>16.03.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Релиз сервиса!
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={2} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.2</Typography>
            <Typography variant={"body1"}>18.03.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Привествую! Этим окошком я буду уведомлять преодически о
              нововведениях, спасибо что пользуетесь моим ресурсом!
            </DialogContentText>

            <DialogContentText>Что было добавлено:</DialogContentText>
            <DialogContentText>
              1) У уголовных статей появилось отображение возможности выхода под
              залог.
            </DialogContentText>
            <DialogContentText>
              2) Возможность поиска статей без точек целым числом. Например:
              Введя 123 пр выбраном уголовном кодесе вы найдете статью 12.3
            </DialogContentText>
            <DialogContentText style={{ margin: "12px 0" }}>
              Дополнение: Если вы не нашли статью по ключевому слову по которому
              вы подразумевали что она найдется, можете написать мне в{" "}
              <Link
                target={"_blank"}
                href={"https://discordapp.com/users/261220696397578251/"}
              >
                дискорд
              </Link>{" "}
              номер статьи и какое ключевое слово нужно добавить.
            </DialogContentText>

            <DialogContentText style={{ margin: "12px 0" }}>
              Также приветствуются предложения по развитию. С предложениями
              приходите в{" "}
              <Link
                target={"_blank"}
                href={"https://discordapp.com/users/261220696397578251/"}
              >
                дискорд.
              </Link>
            </DialogContentText>

            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={3} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.3</Typography>
            <Typography variant={"body1"}>24.03.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Добавлены разделы кодекса при выдаче результатов, чтобы было
              понятней к чему относится статья.
            </DialogContentText>
            <DialogContentText>
              2) Обновлен дизайн фильтров, поисковой выдаче, и поиска.
            </DialogContentText>
            <DialogContentText>3) Добавлен строеовой устав.</DialogContentText>
            <DialogContentText>
              4) Добавлены почти все разделы УВС SANG (за исключением 8, 9, 10
              главы).
            </DialogContentText>
            <DialogContentText>
              5) Добавлена ссылка в заголовке ведущая на форму к каждому кодексу
              при поиске статьи.
            </DialogContentText>

            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={4} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.4</Typography>
            <Typography variant={"body1"}>01.04.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Полностью добавлен уголовный кодекс
            </DialogContentText>
            <DialogContentText>
              2) Полностью добавлен административный кодекс
            </DialogContentText>
            <DialogContentText>
              3) Под поисковой строкой теперь показывааются выбранные фильтры.
            </DialogContentText>
            <DialogContentText>
              4) Добавлена возможность просмотреть историю релизов (кнопочки
              выше)
            </DialogContentText>
            <DialogContentText>
              5) Если нажать на бейдж(Beta...) у логотипа Majestic Helpify, то
              отркроется модальное окно с историей версий
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={5} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.5</Typography>
            <Typography variant={"body1"}>12.05.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>1) Добавлен караульный устав</DialogContentText>
            <DialogContentText>
              2) Добавлен закон о государственной службе.
            </DialogContentText>
            <DialogContentText>
              3) Добавлен 9 и 10 пункт Устава внутренней службы SANG. (Добавлены
              все пункты кроме "7. Система повышений")
            </DialogContentText>
            <DialogContentText style={{ margin: "12px 0" }}>
              Буду рад если вы пройдете короткий опрос:{" "}
              <Link
                target={"_blank"}
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSccGpWbILrye9BtxbkButxbxB1sJ7EQ_ZBYBnFbwQfaxWw_Lg/viewform?usp=sf_link"
                }
              >
                Google Опрос
              </Link>
            </DialogContentText>
            <DialogContentText>
              P.S: В это окошко можно вернуться позже нажав на бейджик "Beta
              0.8" на логотипе
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={6} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.6</Typography>
            <Typography variant={"body1"}>14.05.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>1) Немного обновлен дизайн.</DialogContentText>
            <DialogContentText>
              2) Добавлена законодательная база которая содержит ссылки на все
              кодексы.
            </DialogContentText>
            <DialogContentText>
              3) Обновлены все ссылки из поиска
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={7} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.7</Typography>
            <Typography variant={"body1"}>20.05.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Изменена ссылка для связи со мной в футере(подвале) сайта с
              дискорда на мой телеграмм
            </DialogContentText>
            <DialogContentText>
              2) Во вкладку "Законодательая база" добавлены памятки
            </DialogContentText>
            <DialogContentText>
              3) Добавлен "Закон о статусе прокураторы", и "Закон о коллегии
              адвокатов"
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={81} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.8.1</Typography>
            <Typography variant={"body1"}>18.06.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Мелкие технические изменения
            </DialogContentText>
            <DialogContentText>
              2) Обновлен уголовный кодекс с последними изменениями конгресса
            </DialogContentText>
            <DialogContentText>
              3) Темная теперь дефолтная, больше сменить на светлую нельзя
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={82} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.8.2</Typography>
            <Typography variant={"body1"}>19.06.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Обновлены в связи с последними изменениями конгресса следующие
              кодексы и законы:
              <ul>
                <li>Административный кодекс</li>
                <li>Закон "О гос. службе"</li>
                <li>Закон "О статусе прокураторы"</li>
                <li>Закон "О коллегии адвокатов"</li>
              </ul>
            </DialogContentText>
            <DialogContentText>
              2) Исправлены вознкающие баги на браузере Mozilla Firefox
            </DialogContentText>
            <DialogContentText>
              3) Обновлены ссылки на уставы SANG
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={83} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.8.3</Typography>
            <Typography variant={"body1"}>21.06.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Обновлены в связи с последними изменениями конгресса следующие
              кодексы и законы:
              <ul>
                <li>Административный кодекс</li>
                <li>Уголовный кодекс</li>
                <li>Закон "О статусе прокураторы"</li>
                <li>Закон "О коллегии адвокатов"</li>
              </ul>
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={9} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 0.9</Typography>
            <Typography variant={"body1"}>23.06.2023</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>1) Дорожный кодекс</DialogContentText>
            <DialogContentText>
              2) Кодекс этики и служебного поведения
            </DialogContentText>
            <DialogContentText>
              3) Фильтры перенесы в левый сайдбар для более удобной навигации по
              ним
            </DialogContentText>
            <DialogContentText>4) Обновлен внешний вид</DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color={"primary"}>
                Понятно
              </Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
        <TabPanel index={10} value={activeTab}>
          <DialogTitle>
            <Typography variant={"h5"}>Релиз 1.0</Typography>
            <Typography variant={"body1"}>29.03.2024</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ margin: "12px 0" }}>
              Что было добавлено:
            </DialogContentText>
            <DialogContentText>
              1) Обновлены НПА: Дорожный кодекс, Уголовый кодекс, Кодекс этики,
              Административный кодекс.
            </DialogContentText>
            <DialogContentText>
              2) Добавлены НПА: Конституция, Процессуальный кодекс, Кодекс о
              доходах и налогооблажении, Судебный кодекс, Трудовой кодекс и
              воздушный.
            </DialogContentText>
            <DialogContentText>
              3) Временно отключены законы и уставы - до обновления.
            </DialogContentText>
            <DialogContentText>
              4) Добавлен поиск по подпунктам.
            </DialogContentText>
            <DialogContentText>
              5) Добавлены кнопки "Сбросить все" и "Выделить всё".
            </DialogContentText>
            <DialogContentText>
              6) Обновлена большая часть ссылок в разделе "Законодательная
              база".
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose}>Понятно</Button>
            </DialogActions>
          </DialogContent>
        </TabPanel>
      </Dialog>
    </>
  );
};
