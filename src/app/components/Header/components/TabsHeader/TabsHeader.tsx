"use client";

import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabsHeader = () => {
  const location = usePathname();
  const activeTab = location.split("/").at(-1);
  // const serverName = location.split("/").at(-2)!;
  //TODO: Убрать hardcode
  return (
    <Tabs value={activeTab} variant="scrollable" scrollButtons="auto">
      <Tab
        disableRipple
        value={"test"}
        label="Поиск"
        href={`/test/`}
        LinkComponent={Link}
      />
      <Tab
        disableRipple
        value={"legislativeBase"}
        label={"Законодательная база"}
        href={`/test/legislativeBase`}
        LinkComponent={Link}
      />
    </Tabs>
  );
};

export default TabsHeader;
