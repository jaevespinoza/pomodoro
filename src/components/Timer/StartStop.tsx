import { Grid, Button, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { TimerOption, setIsPlaying } from "../../actions/PomodoroReducer";

interface IPlayButton {
  selectedOption: TimerOption;
}

const PlayButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selectedOption",
})<IPlayButton>(({ theme, selectedOption }) => ({
  backgroundColor:
    selectedOption === "work-timer"
      ? theme.workTimer.button
      : selectedOption === "short-break"
      ? theme.shortBreak.button
      : theme.longBreak.button,
  "&:hover": {
    filter: "brightness(85%)",
    backgroundColor:
      selectedOption === "work-timer"
        ? theme.workTimer.button
        : selectedOption === "short-break"
        ? theme.shortBreak.button
        : theme.longBreak.button,
  },
}));

/**
 * Button that starts or ends the timer. Depending on whether it's
 * playing or not, it will show either "Stop" or "Start"
 */
const StartStop = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.pomodoro.isPlaying);

  const selectedOption = useSelector(
    (state: RootState) => state.pomodoro.option
  );

  const timerValue = useSelector(
    (state: RootState) => state.pomodoro.timer[selectedOption]
  );

  return (
    <Grid item sx={{ marginTop: "20px" }}>
      <PlayButton
        selectedOption={selectedOption}
        variant="contained"
        disableFocusRipple
        disableRipple
        disabled={timerValue.toString() === "0" || timerValue.toString() === ""}
        disableTouchRipple
        onClick={() => dispatch(setIsPlaying(!isPlaying))}
      >
        <Typography>{isPlaying ? "Stop" : "Start"}</Typography>
      </PlayButton>
    </Grid>
  );
};

export default StartStop;
