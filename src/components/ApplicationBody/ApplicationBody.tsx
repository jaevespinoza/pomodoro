import { Grid, Paper, Typography } from "@mui/material";
import TimerOptions from "../Timer/TimerOptions";
import CurrentTime from "../Timer/CurrentTime";
import TimeInput from "../Timer/TimeInput";
import StartStop from "../Timer/StartStop";
import { useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { TimerOption } from "../../actions/PomodoroReducer";

const headerHeight = "50px";

const getColor = (option: TimerOption): string => {
  switch (option) {
    case "long-break":
      return "#F7DC6F";
    case "short-break":
      return "#FF6B6B";
    case "work-timer":
      return "#FF7675";
    default:
      return "";
  }
};

const ApplicationBody = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.pomodoro.option
  );
  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
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
            <Typography>Pomodoro!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
          height: `calc(100% - ${headerHeight})`,
          padding: "10px",
          backgroundColor: getColor(selectedOption),
          transition: "background-color 0.3s ease",
        }}
        container
        direction="column"
        wrap="nowrap"
        alignItems="center"
      >
        <TimerOptions />
        <CurrentTime />
        <TimeInput />
        <StartStop />
      </Grid>
    </Grid>
  );
};

export default ApplicationBody;
