import "./App.css";
import { store } from "./config/store";
import { Provider } from "react-redux";
import ApplicationBody from "./components/ApplicationBody/ApplicationBody";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme/theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ApplicationBody />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
