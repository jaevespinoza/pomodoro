import { styled, Typography } from "@mui/material";

interface StyledComponents {
  isSelected?: boolean;
}

/**
 * Styled component that handles the typography based on
 * styles
 */
const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<StyledComponents>(({ theme, isSelected }) => ({
  color: "white",
  fontWeight: isSelected ? 600 : 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export default StyledTypography;
