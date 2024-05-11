import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

import styles from "@/app/(dashboardPages)/Dashboard.module.css";

export const SidebarItem = ({
  path,
  children,
  icon,
  onClick,
  open,
  disabled,
  sx,
}: {
  path?: string;
  children: string;
  icon?: ReactNode;
  onClick?: () => void;
  open?: boolean;
  disabled?: boolean;
  sx?: React.CSSProperties;
}) => {
  const pathname = usePathname();

  if (path) {
    //Удаляем '/dashboard' в начале пути
    const selectedItem = pathname.split("/").splice(2).join("/");

    return (
      <Link
        href={disabled ? "/dashboard" : `/dashboard/${path}`}
        className={cn(styles.link, { [styles.disabledLink!]: disabled })}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={sx}
            disabled={disabled}
            selected={selectedItem === path}
            onClick={onClick}
          >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}

            <ListItemText>{children}</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    );
  }

  return (
    <ListItem disablePadding>
      <ListItemButton sx={sx} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}

        <ListItemText>{children}</ListItemText>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
  );
};
