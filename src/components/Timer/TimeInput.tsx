import { Grid, TextField, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import {
  setLongBreak,
  setShortBreak,
  setWorkTimer,
} from "../../actions/PomodoroReducer";
import StyledTypography from "../../shared/StyledTypography";

const StyledInput = styled(TextField)(({ theme }) => ({
  width: "100px",
  backgroundColor: "white",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    width: "75px",
  },
}));

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
        <Grid item container direction="column" alignItems="center">
          <StyledTypography>Pomodoro (min)</StyledTypography>
          <StyledInput
            disabled={isPlaying}
            value={pomodoro}
            onChange={(event) =>
              dispatch(setWorkTimer(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column" alignItems="center">
          <StyledTypography>Short break (min)</StyledTypography>
          <StyledInput
            disabled={isPlaying}
            value={shortBreak}
            onChange={(event) =>
              dispatch(setShortBreak(event.currentTarget.value))
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column" alignItems="center">
          <StyledTypography>Long timer (min)</StyledTypography>
          <StyledInput
            disabled={isPlaying}
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
