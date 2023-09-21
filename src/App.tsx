import "./App.css";
import { store } from "./config/store";
import { Provider } from "react-redux";
import ApplicationBody from "./components/ApplicationBody/ApplicationBody";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ApplicationBody />
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
