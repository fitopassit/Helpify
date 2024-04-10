// Кодексы
export const CONSTITUTION = "constitution"; //Конституция
export const CRIMINAL_CODE = "criminalCode"; // Уголовный кодекс
export const CODE_OF_PRACTICE = "codeOfPractice"; // Процессуальный кодекс
export const ADMINISTRATIVE_CODE = "administrativeCode"; // Административный кодекс штата San Andreas
export const HIGHWAY_CODE = "highwayCode"; //Дорожный кодекс
export const LABOR_LAW = "laborLaw"; // Трудовой кодекс
export const CODE_OF_ETHICS = "codeOfEthics"; //Кодекс этики и служебного поведения
export const JUDICIAL_CODE = "judicialCode"; // Судебный кодекс
export const FINANCE_CODE = "financeCode"; // Кодекс о доходах и налогообложении
export const AIR_CODE = "airCode"; // Воздушный кодекс
//Законы
export const ON_PUBLIC_SERVICE = "onPublicService"; // Закон о государственной службе
export const COLLEGIUM_ADVOCATES = "collegiumAdvocates"; //Закон "О Коллегии адвокатов"
export const STATUS_PROSECUTORS = "statusProsecutors"; //Закон "О статусе Прокуратуры”
export const CLOSED_TERRITORIES = "closedTerritories"; //Закон "О статусе территорий"
export const IMMUNITY_PUBLIC_OFFICIALS = "immunityPublicOfficials"; //Закон "О Неприкосновенности должностных лиц”
export const CIRCULATION_OF_WEAPONS_AND_STATE = "circulationOfWeaponsAndState"; //Закон "Об обороте оружия и гос.спец средств штата"
export const STATUS_ACT_FIB = "statusActFbi"; // Закон "О статусе Federal Investigation Bureau"
export const STATUS_ACT_SANG = "statusActSang"; //Закон “О статусе San Andreas National Guard”
export const STATUS_USSS = "statusActUsss"; //Закон “О статусе San Andreas National Guard”
export const STATUS_EMS = "statusActEms"; //Закон “О статусе San Andreas National Guard”
export const STATUS_WZ = "statusActWz"; //Закон "О Weazel News штата San Andreas"
export const POLICE_ACTIVITY = "policeActivity"; //Закон "О деятельности полиции на территории штата San Andreas"
export const GOS_DOC = "gosDoc"; // Заког "О государственных документам"
export const JURISDICTION_STATE = "stateJurisdiction"; //Закон юрисдикциях
export const GOVERNOR_CABINET = "governorCabinet"; //Закон "О Кабинете Губернатора штата San-Andreas"
export const ANIMAL_DEF = "animalDef"; //Закон "Об Установлении прав и защите животного мира"
// Уставы
export const BYLAWS_LSPD = "bylawsLspd"; //Устав Los Santos Police Department
export const BYLAWS_EMS = "bylawsEms"; //Устав Emergency Medical Service
export const BYLAWS_GOV = "bylawsGov"; //Устав Government
export const BYLAWS_SHERIF = "bylawsSherif"; //Устав Los Santos County Sheriff's Department
export const BYLAWS_FBI = "bylawsFbi"; //Устав Federal Investigation Bureau
export const BYLAWS_SANG = "bylawsSang"; //Устав San-Andreas National Guard
export const BYLAWS_WZ = "bylawsWz"; //Устав Weazel News
export const LAW_STATE_SECRET = "lawStateSecret"; // Закон "О Государственной тайне"
// Реестры
export const REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS =
  "registryOfPublicPrivateLawyers"; //Реестр государственных/частных адвокатов
export const REGISTRY_COLLECTOR_GUN = "registryCollectorGun"; //Реестр Коллекционеров Оружия штата SA
export const REGISTRY_LICENSE_CANNABIS = "registryLicenseCannabis"; //Реестр Лицензии "Каннабиса"
export const REGISTRY_LICENSE_PARAMEDIC = "registryLicenseParamedic"; //Реестр Лицензии "Парамедика"
//  Юстиция
export const REGULATIONS_ATTORNEY_OFFICE = "regulationsAttorneyOffice"; //Постановления прокуратуры штата SA
export const SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES =
  "scheduleInspectionsGovernmentAgencies"; //График проверок государственных структур
export const DEPARTMENT_OF_JUSTICE_WARRANTS = "departmentOfJusticeWarrants"; //Ордера министерства юстиции
export const CHECKLIST_CODE_OF_PRACTICE = "checklistCodeOfPractice"; // Памятка по прцоессуальному кодексу
export const CHECKLIST_ADVOCATES = "checklistAdvocates"; // Памятка адвоката

export const PATH_PAGES = {
  SEARCH: "/",
  ALL_CODEXES: "/legislativeBase",
};

export const codexesNames = {
  [CRIMINAL_CODE]: "Уголовный кодекс",
  [ADMINISTRATIVE_CODE]: "Административный кодекс",
  [LABOR_LAW]: "Трудовой кодекс",
  [CODE_OF_PRACTICE]: "Процессуальный кодекс",
  [JUDICIAL_CODE]: "Судебный кодекс",
  [CODE_OF_ETHICS]: "Этики и служебного поведения",
  [AIR_CODE]: "Воздушный кодекс",
  [COLLEGIUM_ADVOCATES]: "Закон о Коллегии адвокатов штата SA",
  [STATUS_PROSECUTORS]: 'Закон "О статусе Прокуратуры штата San Andreas"',
  [CLOSED_TERRITORIES]:
    'Закон "О статусе территорий и особых объектах штата San Andreas"',
  [ON_PUBLIC_SERVICE]: 'Закон "О государственной службе" штата SA',
  [LAW_STATE_SECRET]: 'Закон "О Государственной тайне штата San Andreas"',
  [IMMUNITY_PUBLIC_OFFICIALS]: 'Закон "О Неприкосновенности должностных лиц”',
  [CIRCULATION_OF_WEAPONS_AND_STATE]:
    'Закон "Об обороте оружия и государственных специальных средств штата San Andreas"',
  [STATUS_ACT_FIB]:
    'Закон "О статусе Federal Investigation Bureau штата San-Andreas"',
  [STATUS_ACT_SANG]: 'Закон "О Статусе San Andreas National Guard"',
  [STATUS_WZ]: 'Закон "О Weazel News штата San Andreas"',
  [GOS_DOC]: 'Закон "О государственных документах"',
  [BYLAWS_LSPD]: "Устав Los Santos Police Department",
  [BYLAWS_EMS]: "Устав Emergency Medical Service",
  [BYLAWS_GOV]: "Устав Government",
  [BYLAWS_FBI]: "Устав Federal Investigation Bureau",
  [BYLAWS_SANG]: "Устав San-Andreas National Guard",
  [BYLAWS_WZ]: "Устав Weazel News",
  [BYLAWS_SHERIF]: "Устав Los Santos County Sheriff's Department",
  [CONSTITUTION]: "Конституция",
  [HIGHWAY_CODE]: "Дорожный кодекс",
  [REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS]:
    "Реестр государственных/частных адвокатов",
  [REGISTRY_COLLECTOR_GUN]: "Реестр коллекционеров оружия штата SA",
  [REGISTRY_LICENSE_CANNABIS]: 'Реестр лицензии "Каннабиса"',
  [REGISTRY_LICENSE_PARAMEDIC]: 'Реестр лицензии "Парамедика"',
  [REGULATIONS_ATTORNEY_OFFICE]: "Постановления прокуратуры штата SA",
  [SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES]:
    "График проверок государственных структур",
  [DEPARTMENT_OF_JUSTICE_WARRANTS]: "Ордера министерства юстиции",
  [CHECKLIST_CODE_OF_PRACTICE]: "Памятка по процессуальному кодексу",
  [CHECKLIST_ADVOCATES]: "Памятка адвоката",
  [FINANCE_CODE]: "О доходах и налогообложении",
  [JURISDICTION_STATE]: 'Закон "О Юрисдикции штата San Andreas"',
  [STATUS_USSS]:
    'Закон "О статусе United States Secret Service штата San Andreas"',
  [STATUS_EMS]:
    'Закон "О статусе Emergency Medical Service Штата San-Andereas"',
  [GOVERNOR_CABINET]: 'Закон "О Кабинете Губернатора штата San-Andreas"',
  [POLICE_ACTIVITY]:
    'Закон "О деятельности полиции на территории штата San Andreas"',
  [ANIMAL_DEF]: 'Закон "Об Установлении прав и защите животного мира"',
};

export const codexesLink = {
  //Кодексы
  [CONSTITUTION]:
    "https://forum.majestic-rp.ru/threads/konstitucija-shtata-san-andreas.1372199/",
  [CRIMINAL_CODE]:
    "https://forum.majestic-rp.ru/threads/ugolovnyj-kodeks-shtata-san-andreas.1372219/",
  [ADMINISTRATIVE_CODE]:
    "https://forum.majestic-rp.ru/threads/administrativnyj-kodeks-shtata-san-andreas.1372215/",
  [LABOR_LAW]:
    "https://forum.majestic-rp.ru/threads/trudovoj-kodeks-shtata-sa.1372197/",
  [CODE_OF_PRACTICE]:
    "https://forum.majestic-rp.ru/threads/processualnyj-kodeks-shtata-san-andreas.1372217/",
  [JUDICIAL_CODE]:
    "https://forum.majestic-rp.ru/threads/sudebnyj-kodeks-shtata-san-andreas.1372221/",
  [HIGHWAY_CODE]:
    "https://forum.majestic-rp.ru/threads/dorozhnyj-kodeks-shtata-san-andreas.1372184/",
  [CODE_OF_ETHICS]:
    "https://forum.majestic-rp.ru/threads/kodeks-ehtiki-i-sluzhebnogo-povedenija-shtata-sa.1372188/",
  [FINANCE_CODE]:
    "https://forum.majestic-rp.ru/threads/kodeks-o-doxodax-i-nalogooblozhenii-shtata-san-andreas.1372224/",
  [AIR_CODE]:
    "https://forum.majestic-rp.ru/threads/vozdushnyj-kodeks-shtata-san-andreas.1372193/",
  // Законы
  [JURISDICTION_STATE]:
    "https://forum.majestic-rp.ru/threads/zakon-o-jurisdikcii-shtata-san-andreas.1372279/",
  [COLLEGIUM_ADVOCATES]:
    "https://forum.majestic-rp.ru/threads/zakon-o-kollegii-advokatov-shtata-sa.1372284/",
  [POLICE_ACTIVITY]:
    "https://forum.majestic-rp.ru/threads/zakon-o-dejatelnosti-policii-na-territorii-shtata-san-andreas.1372259/",
  [GOVERNOR_CABINET]:
    "https://forum.majestic-rp.ru/threads/zakon-o-kabinete-gubernatora-shtata-san-andreas.1372297/",
  [STATUS_PROSECUTORS]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-prokuratury-shtata-san-andreas.1372294/",
  [CLOSED_TERRITORIES]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-territorij-i-osobyx-obektax-shtata-san-andreas.1372309/",
  [ANIMAL_DEF]:
    "https://forum.majestic-rp.ru/threads/zakon-ob-ustanovlenii-prav-i-zaschite-zhivotnogo-mira.1372229/",
  [ON_PUBLIC_SERVICE]:
    "https://forum.majestic-rp.ru/threads/zakon-o-gosudarstvennoj-sluzhbe-shtata-sa.1372236/",
  [LAW_STATE_SECRET]:
    "https://forum.majestic-rp.ru/threads/zakon-o-gosudarstvennoj-tajne-shtata-san-andreas.1372290/",
  [IMMUNITY_PUBLIC_OFFICIALS]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-neprikosnovennosti-dolzhnostnyx-lic-shtata-san-andreas.1372265/",
  [CIRCULATION_OF_WEAPONS_AND_STATE]:
    "https://forum.majestic-rp.ru/threads/zakon-ob-oborote-oruzhija-i-gosudarstvennyx-specialnyx-sredstv-shtata-san-andreas.1372264/",
  [STATUS_ACT_FIB]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-federal-investigation-bureau-shtata-san-andreas.1372247/",
  [STATUS_ACT_SANG]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-san-andreas-national-guard.1372234/",
  [STATUS_USSS]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-united-states-secret-service-shtata-san-andreas.1372233/",
  [STATUS_EMS]:
    "https://forum.majestic-rp.ru/threads/zakon-o-statuse-emergency-medical-service-shtata-san-andereas.1372253/",
  [STATUS_WZ]:
    "https://forum.majestic-rp.ru/threads/zakon-o-weazel-news-shtata-san-andreas.1372226/",
  [GOS_DOC]:
    "https://forum.majestic-rp.ru/threads/zakon-o-gosudarstvennyx-dokumentax.1372283/",
  [BYLAWS_LSPD]: "https://forum.majestic-rp.ru/threads/ustav-lspd.1394927/",
  [BYLAWS_EMS]:
    "https://forum.majestic-rp.ru/threads/ems-ustav-emergency-medical-services-shtata-san-andreas-washington.1371403/",
  [BYLAWS_GOV]:
    "https://forum.majestic-rp.ru/threads/vnutrennij-trudovoj-rasporjadok-government-of-san-andreas-state.1373667/",
  [BYLAWS_FBI]: "https://forum.majestic-rp.ru/threads/fib-ustav.1406213/",
  [BYLAWS_SHERIF]:
    "https://forum.majestic-rp.ru/threads/vnutrennij-ustav-los-santos-county-sheriff-departament.1411263/",
  [BYLAWS_WZ]: "https://forum.majestic-rp.ru/threads/ustav.1372010/",
  [BYLAWS_SANG]:
    "https://forum.majestic-rp.ru/threads/sang-ustav-vnutrennej-sluzhby.1372311/",
  [REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS]:
    "https://docs.google.com/spreadsheets/d/1RKCmjWx-jJ9nW9EgpCjOD0hqiZTEQF-YMMQXBpNLg3U/edit",
  [REGISTRY_COLLECTOR_GUN]:
    "https://docs.google.com/spreadsheets/d/1lV51HImND2iIGOnV1hj60V0lqIqZ2JbgDtcuI1iDZdU/edit?usp=sharing",
  [REGISTRY_LICENSE_CANNABIS]:
    "https://docs.google.com/spreadsheets/d/1WkR-1WuVheRWtkIzSv7sc9HOjRDbyM1UOqH1XVwx-KM/edit#gid=0",
  [REGISTRY_LICENSE_PARAMEDIC]:
    "https://docs.google.com/spreadsheets/u/0/d/1ESP1o4QbogMbb8ebdh6wP6L_XjxyZ4n5dQaXUN2AW9A",
  [REGULATIONS_ATTORNEY_OFFICE]:
    "https://forum.majestic-rp.ru/threads/justice-postanovlenie-prokuratury-shtata-sa.1373719/",
  [SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES]:
    "https://forum.majestic-rp.ru/threads/justice-grafik-proverok-gosudarstvennyx-struktur.1373717/",
  [DEPARTMENT_OF_JUSTICE_WARRANTS]:
    "https://forum.majestic-rp.ru/threads/justice-vydannye-ordera.1373721/",
  [CHECKLIST_CODE_OF_PRACTICE]:
    "https://docs.google.com/spreadsheets/d/1Sx4_Lu0eMeSrATB3PZouSU5Xpkzk-VgrC2QXrhBgans",
  [CHECKLIST_ADVOCATES]:
    "https://docs.google.com/document/d/1jSWIRbzDAY6hsScUvKU0__MDeH_vbA-bKZ_OZT3wek0",
};

export const codexesNamesShorted = {
  [CRIMINAL_CODE]: "Уголовный",
  [ADMINISTRATIVE_CODE]: "Административный",
  [LABOR_LAW]: "Трудовой",
  [CODE_OF_PRACTICE]: "Процессуальный",
  [JUDICIAL_CODE]: "Судебный",
  [AIR_CODE]: "Воздушный",
  [CODE_OF_ETHICS]: "Кодекс этики",
  [FINANCE_CODE]: "О доходах и налогообложении",
  [COLLEGIUM_ADVOCATES]: "О Коллегии адвокатов",
  [ANIMAL_DEF]: 'Закон "Об Установлении прав и защите животного мира"\n',
  [STATUS_PROSECUTORS]: "О Статусе Прокуратуры",
  [CLOSED_TERRITORIES]: "О Закрытых территориях",
  [ON_PUBLIC_SERVICE]: "О Государственной службе",
  [LAW_STATE_SECRET]: "О Государственной тайне",
  [IMMUNITY_PUBLIC_OFFICIALS]:
    'Закон "О статусе неприкосновенности должностных лиц штата San Andreas"',
  [CIRCULATION_OF_WEAPONS_AND_STATE]:
    "Об обороте оружия и гос.спец средств штата",
  [STATUS_ACT_FIB]: "О статусе Federal Investigation Bureau",
  [STATUS_ACT_SANG]: "О статусе San Andreas National Guard",
  [GOS_DOC]: 'Закон "О государственных документах"',
  [BYLAWS_LSPD]: "Устав Los Santos Police Department",
  [BYLAWS_EMS]: "Устав EMS",
  [BYLAWS_GOV]: "Устав Government",
  [BYLAWS_FBI]: "Устав FIB",
  [BYLAWS_SHERIF]: "Устав Los Santos County Sheriff's Department",
  [CONSTITUTION]: "Конституция",
  [HIGHWAY_CODE]: "Дорожный",
  [REGISTRY_OF_PUBLIC_PRIVATE_LAWYERS]:
    "Реестр государственных/частных адвокатов",
  [REGISTRY_COLLECTOR_GUN]: "Реестр коллекционеров оружия штата SA",
  [REGISTRY_LICENSE_CANNABIS]: 'Реестр лицензии "Каннабиса"',
  [REGISTRY_LICENSE_PARAMEDIC]: 'Реестр лицензии "Парамедика"',
  [REGULATIONS_ATTORNEY_OFFICE]: "Постановления прокуратуры штата SA",
  [SCHEDULE_INSPECTIONS_GOVERNMENT_AGENCIES]:
    "График проверок государственных структур",
  [DEPARTMENT_OF_JUSTICE_WARRANTS]: "Ордера министерства юстиции",
  [CHECKLIST_CODE_OF_PRACTICE]: "Памятка по процессуальному кодексу",
  [CHECKLIST_ADVOCATES]: "Памятка адвоката",
};
