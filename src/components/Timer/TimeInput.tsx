import { Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import {
  setLongBreak,
  setShortBreak,
  setWorkTimer,
} from "../../actions/PomodoroReducer";

/**
 * Row component that has the inputs for each one of the
 * timers (pomodoro, short timer and long timer). If it's already playing,
 * it will be disabled so as to not disrupt the timer.
 */
const TimeInput = () => {
  const pomodoro = useSelector(
    (state: RootState) => state.pomodoro.timer["work-timer"]
  );
  const shortBreak = useSelector(
    (state: RootState) => state.pomodoro.timer["short-break"]
  );
  const longBreak = useSelector(
    (state: RootState) => state.pomodoro.timer["long-break"]
  );

  const isPlaying = useSelector((state: RootState) => state.pomodoro.isPlaying);

  const dispatch = useDispatch();

  return (
    <Grid
      item
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ width: "50%", marginTop: "20px" }}
    >
      <Grid>
        <Grid item container direction="column">
          <Typography sx={{ color: "white" }}>Pomodoro (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px", backgroundColor: "white" }}
            value={pomodoro}
            onChange={(event) =>
              dispatch(setWorkTimer(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography sx={{ color: "white" }}>Short break (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px", backgroundColor: "white" }}
            value={shortBreak}
            onChange={(event) =>
              dispatch(setShortBreak(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography sx={{ color: "white" }}>Long timer (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px", backgroundColor: "white" }}
            value={longBreak}
            onChange={(event) =>
              dispatch(setLongBreak(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimeInput;
