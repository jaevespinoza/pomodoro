import { Grid, TextField, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import {
  setLongBreak,
  setShortBreak,
  setWorkTimer,
} from "../../actions/PomodoroReducer";
import StyledTypography from "../../shared/StyledTypography";

/**
 * Styled input that will let us set breakpoints into
 * the textfield component of material UI.
 */
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

  const content = [
    {
      title: "Pomodoro (min)",
      value: pomodoro,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setWorkTimer(event.currentTarget.value)),
    },
    {
      title: "Short break (min)",
      value: shortBreak,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setShortBreak(event.currentTarget.value)),
    },
    {
      title: "Long break (min)",
      value: longBreak,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setLongBreak(event.currentTarget.value)),
    },
  ];

  return (
    <Grid
      item
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ width: "50%", marginTop: "20px" }}
    >
      {content.map((item) => {
        return (
          <Grid key={item.title}>
            <Grid item container direction="column" alignItems="center">
              <StyledTypography>{item.title}</StyledTypography>
              <StyledInput
                disabled={isPlaying}
                value={item.value}
                onChange={item.onChange}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TimeInput;
