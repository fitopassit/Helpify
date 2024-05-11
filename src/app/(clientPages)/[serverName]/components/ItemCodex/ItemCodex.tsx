import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box, Tooltip, Typography } from "@mui/material";
import { Image } from "antd";
import React, { Fragment } from "react";
import reactStringReplace from "react-string-replace";

import { IArticle } from "@/app/types/types";

import { StyledPaper } from "../StylesMUIComponents";
import styles from "./ItemCodex.module.css";

interface ItemCodexProps {
  articles: IArticle[];
  searchValue: string;
}

export const ItemCodex: React.FC<ItemCodexProps> = ({
  articles,
  searchValue,
}) => {
  return (
    <>
      {articles.map((article, i) => {
        const titleParts = article.titleArticle.split(/\n/);
        const highlightTitleArticle = titleParts.map((part, index) => (
          <Fragment key={index}>
            {index !== 0 && <br />}
            {reactStringReplace(part, searchValue, (match, index) => (
              <Typography
                key={part + index}
                variant={"body1"}
                style={{
                  backgroundColor: "yellow",
                  display: "inline",
                  color: "black",
                }}
              >
                {match}
              </Typography>
            ))}
          </Fragment>
        ));

        const highlightTitleArticleNumber = reactStringReplace(
          article.article,
          searchValue,
          (match, index) => (
            <Typography
              key={article.article + index}
              variant={"body1"}
              style={{
                backgroundColor: "yellow",
                display: "inline",
                color: "black",
              }}
            >
              {match}
            </Typography>
          ),
        );

        return (
          <StyledPaper className={styles.item} key={article.article + i}>
            <Typography variant={"body1"}>
              <span className={styles.article}>
                {highlightTitleArticleNumber}
              </span>
              <span>{highlightTitleArticle}</span>
            </Typography>

            {article?.list && (
              <ul className={styles.articleList}>
                {article.list.map((codex, i) => {
                  const titleParts = codex.titleArticle.split(/\n/);

                  const highlightTitleArticle = titleParts.map(
                    (part, index) => (
                      <Fragment key={index}>
                        {index !== 0 && <br />}
                        {reactStringReplace(
                          part,
                          searchValue,
                          (match, index) => (
                            <Typography
                              key={part + index}
                              variant={"body1"}
                              style={{
                                backgroundColor: "yellow",
                                display: "inline",
                                color: "black",
                              }}
                            >
                              {match}
                            </Typography>
                          ),
                        )}
                      </Fragment>
                    ),
                  );

                  const highlightTitleArticleNumber = reactStringReplace(
                    codex.article,
                    searchValue,
                    (match, index) => (
                      <Typography
                        key={codex.article + index}
                        variant={"body1"}
                        style={{
                          backgroundColor: "yellow",
                          display: "inline",
                          color: "black",
                        }}
                      >
                        {match}
                      </Typography>
                    ),
                  );

                  return (
                    <li key={`${codex}_${i}`}>
                      <Typography variant={"body1"} sx={{ marginLeft: "6px" }}>
                        <span
                          style={{ marginLeft: 6 }}
                          className={styles.article}
                        >
                          {highlightTitleArticleNumber}
                        </span>

                        <span>{highlightTitleArticle}</span>
                      </Typography>
                      {codex.note && (
                        <div className={styles.listContainer}>
                          <Tooltip title="Примечание" placement="left">
                            <span className={styles.note}>
                              <ErrorOutlineIcon
                                fontSize={"small"}
                                style={{ marginLeft: -4 }}
                              />
                            </span>
                          </Tooltip>

                          <Typography variant={"body1"}>
                            <span style={{ fontSize: 14 }}>{codex.note}</span>
                          </Typography>
                        </div>
                      )}
                      {codex.exception && (
                        <div className={styles.listContainer}>
                          <Tooltip title="Исключение" placement="left">
                            <span className={styles.exception}>
                              <WarningAmberIcon
                                fontSize={"small"}
                                style={{ marginLeft: -4 }}
                              />
                            </span>
                          </Tooltip>
                          <Typography variant={"body1"}>
                            <span style={{ fontSize: 14 }}>
                              {codex.exception}
                            </span>
                          </Typography>
                        </div>
                      )}

                      {codex.punishment && (
                        <div className={styles.listContainer}>
                          <Tooltip title={"Наказание"} placement="left">
                            <span className={styles.punishment}>
                              <ReportGmailerrorredIcon
                                style={{ marginLeft: -4 }}
                              />
                            </span>
                          </Tooltip>
                          <Typography variant={"body1"}>
                            {codex.punishment.join(",")}
                          </Typography>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {/*исключение*/}
            {article.exception && (
              <div className={styles.container}>
                <Tooltip title="Исключение" placement="left">
                  <span className={styles.exception}>
                    <WarningAmberIcon style={{ marginLeft: -4 }} />
                  </span>
                </Tooltip>
                <Typography variant={"body1"}>{article.exception}</Typography>
              </div>
            )}

            {/*объяснение*/}
            {article.explanation && (
              <div className={styles.container}>
                <Tooltip title="Объяснение" placement="left">
                  <span className={styles.exception}>
                    <GppMaybeOutlinedIcon style={{ marginLeft: -4 }} />
                  </span>
                </Tooltip>
                <Typography variant={"body1"}>{article.explanation}</Typography>
              </div>
            )}

            {/*примечание*/}
            {article.note && (
              <div className={styles.container}>
                <Tooltip title="Примечание" placement="left">
                  <span className={styles.note}>
                    <ErrorOutlineIcon style={{ marginLeft: -4 }} />
                  </span>
                </Tooltip>

                <Typography variant={"body1"}>{article.note}</Typography>
              </div>
            )}

            {/*наказание*/}
            {article.punishment.length >= 1 && (
              <div className={styles.container}>
                <Tooltip title={"Наказание"} placement="left">
                  <span className={styles.punishment}>
                    <ReportGmailerrorredIcon style={{ marginLeft: -4 }} />
                  </span>
                </Tooltip>
                <Typography variant={"body1"}>
                  {article.punishment.join(",")}
                </Typography>
              </div>
            )}

            {/*Массив картинок у статьи*/}
            {article?.images && article.images.length >= 1 && (
              <div className={styles.imageContainer}>
                {article.images.map((image) => {
                  return (
                    <Box sx={{ height: "50%", width: "48%" }}>
                      <Typography
                        variant={"caption"}
                        sx={{ minHeight: "24px", display: "flex" }}
                      >
                        {image.label}
                      </Typography>
                      <Image
                        src={image.src}
                        width={"100%"}
                        height={"100%%"}
                        preview={{ mask: "Предпросмотр" }}
                      />
                    </Box>
                  );
                })}
              </div>
            )}
          </StyledPaper>
        );
      })}
    </>
  );
};
