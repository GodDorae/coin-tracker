import React from "react";
import { DefaultTheme } from "styled-components";
import { darkTheme } from "../theme";

interface ContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ContextProps>({
  theme: darkTheme,
  toggleTheme: () => {
    return null;
  },
});

export default ThemeContext;
