import { styled, Button } from "@mui/material";

export interface IStyledButton {
  isSelected: boolean;
}

/**
 * Styled button that handles the background change
 * depending on whether if it's selected or not
 */
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<IStyledButton>((prop) => ({
  backgroundColor: prop.isSelected ? "rgba(108, 122, 137, 0.8)" : "none",
  transition: `background-color ease 0.3s`,
}));

export default StyledButton;
