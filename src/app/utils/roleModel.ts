import { Role, User } from "@prisma/client";

// export const EMPLOYEE_ROLE = [Role.Admin, Role.Curator, Role.Editor]; //TODO: иди нахуй

export const SERVERS = "servers" as const;
export const SERVERS_ADD = "servers/add" as const;

export const ADMINS = "users" as const;
export const ADMINS_ADD = "users/add" as const;
export const CURATORS = "curators" as const;
export const CURATORS_ADD = "curators/add" as const;
export const EDITORS = "editors" as const;

export const EDITORS_ADD = "editors/add" as const;
export const USERS = "users";

export const ALLOWED_CURATORS_TABS = [EDITORS, EDITORS_ADD, USERS];

// добавить еще добавление статей
export const ALLOWED_EDITOR_TABS = [];

export const ALLOWED_ADMIN_TABS = [
  SERVERS,
  SERVERS_ADD,

  CURATORS,
  CURATORS_ADD,

  EDITORS,
  EDITORS_ADD,

  USERS,
];

export const ALLOWED_ROLES_TO_DASHBOARD: User["role"][] = [
  "Admin",
  "Curator",
  "Editor",
];

export const ALLOWED_ROLE_TO_MAIN_SIDEBAR: User["role"][] = [
  "Admin",
  "Curator",
  "Editor",
];

//TODO: уточнить по CharperItem, SubChapterItem, Chapter, GlobalServerRules, ServerRules, Laws
export const ALLOWED_ROLE_TO_SERVERS_SIDEBAR: User["role"][] = ["Admin"];

export const ALLOWED_ROLE_TO_LAWS_SIDEBAR: User["role"][] = [
  "Admin",
  "Curator",
  "Editor",
];

export const getAllowedRoleSidebar = ({
  role,
  type,
}: {
  role?: User["role"];
  type: "SERVERS" | "LAWS" | "MAIN";
}) => {
  if (!role) return false;

  switch (type) {
    case "SERVERS":
      return ALLOWED_ROLE_TO_SERVERS_SIDEBAR.includes(role);
    case "MAIN":
      return ALLOWED_ROLE_TO_MAIN_SIDEBAR.includes(role);
    case "LAWS":
      return ALLOWED_ROLE_TO_LAWS_SIDEBAR.includes(role);
  }
};

export const getAllowedTabsForRole = (role?: User["role"]): string[] => {
  if (!role) return [];

  switch (role) {
    case "Admin":
      return ALLOWED_ADMIN_TABS;
    case "Curator":
      return ALLOWED_CURATORS_TABS;
    case "Editor":
      return ALLOWED_EDITOR_TABS;
    default:
      return [];
  }
};

export const getAllowedTabsForRoleByPathname = (
  role: User["role"] | undefined,
  path:
    // | (typeof ALLOWED_DISPATCHER_TABS)[number]
    // | (typeof ALLOWED_AGENT_TABS)[number]
    | (typeof ALLOWED_ADMIN_TABS)[number]
    // | (typeof ALLOWED_DEVELOPER_TABS)[number],
) => {
  if (role) {
    const allowedPathByRole = getAllowedTabsForRole(role);

    return allowedPathByRole.includes(path);
  }
};
export const checkRoleIsAllowed = (role: keyof typeof Role | undefined) => {
  if (role) return !ALLOWED_ROLES_TO_DASHBOARD.includes(role);
};
