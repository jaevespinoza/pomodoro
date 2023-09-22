import { Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import {
  setLongBreak,
  setShortBreak,
  setWorkTimer,
} from "../../actions/PomodoroReducer";

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
          <Typography>Pomodoro (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px" }}
            value={pomodoro}
            onChange={(event) =>
              dispatch(setWorkTimer(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography>Short break (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px" }}
            value={shortBreak}
            onChange={(event) =>
              dispatch(setShortBreak(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography>Long timer (min)</Typography>
          <TextField
            disabled={isPlaying}
            sx={{ width: "100px" }}
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
