import { Grid, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { setOption } from "../../actions/PomodoroReducer";

const TimerOptions = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.pomodoro.option
  );

  const dispatch = useDispatch();

  return (
    <Grid item sx={{ width: "50%" }}>
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <Button
            variant="text"
            onClick={() => dispatch(setOption("work-timer"))}
          >
            <Typography>Pomodoro</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            onClick={() => dispatch(setOption("short-break"))}
          >
            <Typography>Short break</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            onClick={() => dispatch(setOption("long-break"))}
          >
            <Typography>Long break</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimerOptions;
