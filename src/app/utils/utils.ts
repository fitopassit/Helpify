import { pick, uniqBy } from "lodash";

import { IAllCodexes, IArticle, IData, TAllNameCodexes } from "../types/types";

export const matchData = (
  inputValue: string,
  defaultObj: IData,
  legislation: TAllNameCodexes[],
): IData => {
  if (inputValue === "") return {};
  let result = {};

  result = filterResultsByArticle(pick(defaultObj, legislation), inputValue);

  const matchedKeyword = filterResultsByKeyword(
    pick(defaultObj, legislation),
    inputValue,
  );
  result = mergeDeep(result, matchedKeyword);

  const matchedNames = filterResultsByName(
    pick(defaultObj, legislation),
    inputValue,
  );
  result = mergeDeep(result, matchedNames);

  const matchedList = filterResultsInList(
    pick(defaultObj, legislation),
    inputValue,
  );
  result = mergeDeep(result, matchedList);

  return sortAndFilterCodexes(result);
};
export const filterResultsByKeyword = (
  codexes: IData,
  keyword: string,
): IData => {
  const result: IData = {};

  for (const codex in codexes) {
    const currentCodex = codexes[codex];
    const newCurrentCodex = Object.values(currentCodex);
    const newChapterCodex = Object.keys(currentCodex);

    for (let i = 0; i < newCurrentCodex.length; i++) {
      const filterCodex = newCurrentCodex[i].data;
      const title = newCurrentCodex[i].title;
      const key = newChapterCodex[i];

      if (filterCodex.length) {
        result[codex] = {
          ...result[codex],
          [key]: {
            title,
            data: [
              ...filterCodex.reduce(
                (previousValue: IArticle[], currentValue) => {
                  if (
                    currentValue.keyword
                      .join()
                      .toLowerCase()
                      .includes(keyword.toLowerCase())
                  ) {
                    previousValue = [...previousValue, { ...currentValue }];
                  }

                  return previousValue;
                },
                [],
              ),
            ],
          },
        };
      }
    }
  }

  return result;
};
export const filterResultsByArticle = (
  codexes: IData,
  article: string,
): IData => {
  const result: IData = {};

  for (const codex in codexes) {
    const currentCodex = codexes[codex];
    const newCurrentCodex = Object.values(currentCodex);
    const newChapterCodex = Object.keys(currentCodex);

    for (let i = 0; i < newCurrentCodex.length; i++) {
      const filterCodex = newCurrentCodex[i].data;
      const chapterTitle = newCurrentCodex[i].title;
      const key = newChapterCodex[i];

      if (filterCodex.length) {
        result[codex] = {
          ...result[codex],
          [key]: {
            title: chapterTitle,
            data: [
              ...filterCodex.filter((codex) =>
                codex.article
                  .split(".")
                  .join("")
                  .toLowerCase()
                  .includes(article.split(".").join("").toLowerCase()),
              ),
            ],
          },
        };
      }
    }
  }

  return result;
};
export const filterResultsByName = (codexes: IData, name: string): IData => {
  const result: IData = {};

  for (const codex in codexes) {
    const currentCodex = codexes[codex];
    const newCurrentCodex = Object.values(currentCodex);
    const newChapterCodex = Object.keys(currentCodex);

    for (let i = 0; i < newCurrentCodex.length; i++) {
      const filterCodex = newCurrentCodex[i].data;
      const chapterTitle = newCurrentCodex[i].title;
      const key = newChapterCodex[i];

      if (filterCodex.length) {
        result[codex] = {
          ...result[codex],
          [key]: {
            title: chapterTitle,
            data: [
              ...filterCodex.filter((codex) =>
                codex.titleArticle.toLowerCase().includes(name.toLowerCase()),
              ),
            ],
          },
        };
      }
    }
  }

  return result;
};

export const filterResultsInList = (codexes: IData, name: string): IData => {
  const result: IData = {};

  for (const codex in codexes) {
    const currentCodex = codexes[codex];
    const newCurrentCodex = Object.values(currentCodex);
    const newChapterCodex = Object.keys(currentCodex);

    for (let i = 0; i < newCurrentCodex.length; i++) {
      const filterCodex = newCurrentCodex[i].data;
      const chapterTitle = newCurrentCodex[i].title;
      const key = newChapterCodex[i];

      if (filterCodex.length) {
        result[codex] = {
          ...result[codex],
          [key]: {
            title: chapterTitle,
            data: filterCodex.filter((entry: any) => {
              if (entry?.list) {
                for (const item of entry.list) {
                  if (
                    item.titleArticle
                      .toLowerCase()
                      .includes(name.toLowerCase()) ||
                    item.article.toLowerCase().includes(name.toLowerCase())
                  ) {
                    return true;
                  }
                }
                return false;
              } else {
                return false;
              }
            }),
          },
        };
      }
    }
  }

  return result;
};

export const getObjectKeyByValue = (
  object: IAllCodexes,
): TAllNameCodexes[] | [] => {
  const result: TAllNameCodexes[] = [];

  for (const item in object) {
    if (object[item as TAllNameCodexes]) result.push(item as TAllNameCodexes);
  }

  return result;
};

export const stringConversionToBoolean = (value: string | null): boolean => {
  return value !== "false";
};

function mergeDeep(target: IData, source: IData) {
  const isObject = (obj: Object) => obj && typeof obj === "object";

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key] as any;
    const sourceValue = source[key] as any;

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue) as any;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      Object.assign({}, targetValue);
      target[key] = mergeDeep(
        Object.assign({}, targetValue),
        sourceValue,
      ) as any;
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

const sortAndFilterCodexes = (codexes: IData) => {
  const result: IData = {};

  for (const codex in codexes) {
    const currentCodex = codexes[codex];
    const newCurrentCodex = Object.values(currentCodex);
    const newChapterCodex = Object.keys(currentCodex);

    for (let i = 0; i < newCurrentCodex.length; i++) {
      const filterCodex = newCurrentCodex[i].data;
      const chapterTitle = newCurrentCodex[i].title;
      const key = newChapterCodex[i];

      if (filterCodex.length) {
        result[codex] = {
          ...result[codex],
          [key]: {
            title: chapterTitle,
            data: filterCodex.sort((a, b) => {
              if (a.article > b.article) return 1;
              if (b.article > a.article) return -1;
              return 0;
            }),
          },
        };
        //
        result[codex] = {
          ...result[codex],
          [key]: {
            title: chapterTitle,
            data: uniqBy(filterCodex, "article"),
          },
        };
      }
    }
  }
  return result;
};