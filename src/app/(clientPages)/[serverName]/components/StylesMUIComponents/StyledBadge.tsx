import { Badge, BadgeProps, styled } from "@mui/material";

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: "-25px",
    top: "6px",
  },
}));
