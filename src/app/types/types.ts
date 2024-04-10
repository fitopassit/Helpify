import {
  ADMINISTRATIVE_CODE,
  CODE_OF_ETHICS,
  CONSTITUTION,
  CRIMINAL_CODE,
  HIGHWAY_CODE,
  JUDICIAL_CODE,
  FINANCE_CODE,
  LABOR_LAW,
  AIR_CODE,
  CODE_OF_PRACTICE,
} from "../utils/contants";

export interface IArticle {
  article: string;
  titleArticle: string;
  punishment: string[];
  keyword: string[];
  exception: string | null;
  explanation: string | null;
  note: string | null;
  list?: {
    article: string;
    titleArticle: string;
    note: string | null;
    exception?: string;
    punishment?: string[];
  }[];
  images?: { src: string; label?: string }[];
}

export type TAllNameCodexes = keyof IAllCodexes;

export interface codexType {
  [key: string]: {
    title: string;
    data: IArticle[];
  };
}
export interface IData {
  [key: string]: codexType;
}

export interface IAllCodexes {
  [CRIMINAL_CODE]: boolean;
  [ADMINISTRATIVE_CODE]: boolean;
  [CODE_OF_ETHICS]: boolean;
  [HIGHWAY_CODE]: boolean;
  [JUDICIAL_CODE]: boolean;
  [CONSTITUTION]: boolean;
  [FINANCE_CODE]: boolean;
  [LABOR_LAW]: boolean;
  [AIR_CODE]: boolean;
  [CODE_OF_PRACTICE]: boolean;
}
