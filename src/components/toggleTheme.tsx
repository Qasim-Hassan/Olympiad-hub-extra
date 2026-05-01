import { useContext } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ColorModeContext } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      <Brightness4Icon />
    </IconButton>
  );
}