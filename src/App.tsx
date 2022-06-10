import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
import ThemeContext from "./store/theme-context";
import { useDarkMode } from "./useDarkMode";
import { GlobalStyle } from "./global-style";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeContext.Provider>
  );
}

export default App;
