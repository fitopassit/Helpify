import { Paper, PaperProps, styled } from "@mui/material";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  backgroundColor:
    theme?.components?.MuiPaper?.defaultProps?.style?.backgroundColor,
}));
