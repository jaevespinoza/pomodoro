import "./App.css";
import { store } from "./config/store";
import { Provider } from "react-redux";
import ApplicationBody from "./components/ApplicationBody/ApplicationBody";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme/theme";

/**
 * Full application. It's wrapped in the provider component
 * to give access to the state and the ThemeProvider to grant
 * access to the theme through the app.
 */
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <ApplicationBody />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
