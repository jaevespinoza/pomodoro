import { Grid, Paper, Theme, Typography, useTheme } from "@mui/material";
import TimerOptions from "../Timer/TimerOptions";
import CurrentTime from "../Timer/CurrentTime";
import TimeInput from "../Timer/TimeInput";
import StartStop from "../Timer/StartStop";
import { useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { TimerOption } from "../../actions/PomodoroReducer";

const headerHeight = "50px";

/**
 * Function that allows to set the color of the background
 * depending on the type of break
 * @param option The type of break
 * @returns The background color
 */
const getColor = (theme: Theme, option: TimerOption): string => {
  switch (option) {
    case "long-break":
      return theme.longBreak.color;
    case "short-break":
      return theme.shortBreak.color;
    case "work-timer":
      return theme.workTimer.color;
    default:
      return "";
  }
};

/**
 * The application's body. This shall have all the components
 * related to the application.
 */
const ApplicationBody = () => {
  const theme = useTheme();
  const selectedOption = useSelector(
    (state: RootState) => state.pomodoro.option
  );
  return (
    <Grid container direction="column" sx={{ height: "100vh" }} wrap="nowrap">
      <Grid
        item
        sx={{ width: "100%", height: headerHeight, position: "sticky" }}
      >
        <Grid
          component={Paper}
          elevation={1}
          container
          justifyContent="center"
          height={headerHeight}
          alignItems="center"
        >
          <Grid item>
            <Typography>Neural Clocks!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
          height: `calc(100% - ${headerHeight})`,
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: getColor(theme, selectedOption),
          transition: "background-color 0.3s ease",
        }}
        container
      >
        <Grid
          item
          container
          direction="column"
          wrap="nowrap"
          alignItems="center"
          sx={{ backgroundColor: "inherit" }}
        >
          <TimerOptions />
          <CurrentTime />
          <TimeInput />
          <StartStop />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ApplicationBody;
