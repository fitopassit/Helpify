import { IData } from "../../types/types";
import {
  CRIMINAL_CODE,
  ADMINISTRATIVE_CODE,
  ON_PUBLIC_SERVICE,
  STATUS_PROSECUTORS,
  COLLEGIUM_ADVOCATES,
  BYLAWS_FBI,
  BYLAWS_EMS,
  CODE_OF_ETHICS,
  HIGHWAY_CODE,
  FINANCE_CODE,
  CONSTITUTION,
  LABOR_LAW,
  AIR_CODE,
  CODE_OF_PRACTICE,
  JUDICIAL_CODE,
} from "../contants";
import { administrativeCode } from "./administrativeCode";
import { airCode } from "./airCode";
import { bylawsEms } from "./bylawsEms";
import { bylawsFbi } from "./bylawsFbi";
import { codeOfEthic } from "./codeOfEthic";
import { codeOfPractice } from "./codeOfPractice";
import { collegiumAdvocates } from "./collegiumAdvocates";
import { constitutionCode } from "./constitution";
import { criminalCode } from "./criminalCode";
import { financeCode } from "./financeCode";
import { highwayCode } from "./highwayCode";
import { judicialCode } from "./judicialCode";
import { laborlaw } from "./laborlaw";
import { onPublicService } from "./onPublicService";
import { statusProsecutors } from "./statusProsecutors";

export const mockData2: IData = {
  [CRIMINAL_CODE]: { ...criminalCode }, //Уголовный кодекс
  [ADMINISTRATIVE_CODE]: { ...administrativeCode }, //Административный кодекс
  [ON_PUBLIC_SERVICE]: { ...onPublicService }, // Закон о государственной службе
  [STATUS_PROSECUTORS]: { ...statusProsecutors }, // Закон "О статусе Прокуратуры”
  [COLLEGIUM_ADVOCATES]: { ...collegiumAdvocates }, // Закон "О коллегии адвокатов”
  [BYLAWS_FBI]: { ...bylawsFbi }, // Устав FBI
  [BYLAWS_EMS]: { ...bylawsEms }, // Устав EMS
  [CODE_OF_ETHICS]: { ...codeOfEthic }, // Кодекс этики
  [HIGHWAY_CODE]: { ...highwayCode }, // Дорожный кодекс
  [FINANCE_CODE]: { ...financeCode }, // Финансовые кодекс
  [CONSTITUTION]: { ...constitutionCode }, //Конституция
  [LABOR_LAW]: { ...laborlaw }, //Трудовой кодекс
  [AIR_CODE]: { ...airCode }, // Воздушный кодекс
  [CODE_OF_PRACTICE]: { ...codeOfPractice }, // Процессуальный кодекс
  [JUDICIAL_CODE]: { ...judicialCode }, // Судебный кодекс
};
