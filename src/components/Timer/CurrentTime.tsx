import { Grid, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { increaseTimerCountAfterPomodoro } from "../../actions/PomodoroReducer";

type HexColor = [`#${string}`, `#${string}`, `#${string}`, `#${string}`];

// Work Time Colors (HEX)
const workTimeColorsHex: HexColor = [
  "#00B894", // Focus Green
  "#E74C3C", // Energy Red
  "#3498DB", // Calm Blue
  "#FFA726", // Inspiration Orange
];

// Short Break Colors (HEX)
const shortBreakColorsHex: HexColor = [
  "#1ABC9C", // Relaxing Teal
  "#F1C40F", // Refresh Yellow
  "#2ECC71", // Nature Green
  "#9B59B6", // Mindful Purple
];

// Long Break Colors (HEX)
const longBreakColorsHex: HexColor = [
  "#6C5CE7", // Peaceful Lavender
  "#2980B9", // Tranquil Blue
  "#D35400", // Sunset Orange
  "#FD79A8", // Harmony Pink
];

const colorsHex = {
  "work-timer": workTimeColorsHex,
  "short-break": shortBreakColorsHex,
  "long-break": longBreakColorsHex,
};

const MinutesSecondsCountdown = () => {
  const optionSelected = useSelector(
    (state: RootState) => state.pomodoro.option
  );
  const timerValues = useSelector((state: RootState) => state.pomodoro.timer);
  const isPlaying = useSelector((state: RootState) => state.pomodoro.isPlaying);
  const dispatch = useDispatch();

  const children = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <Typography variant="h3">{`${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`}</Typography>
    );
  };

  const selectedValue = timerValues[optionSelected];

  return (
    <Grid item sx={{ marginTop: "20px" }}>
      <CountdownCircleTimer
        key={optionSelected}
        isPlaying={isPlaying}
        duration={timerValues[optionSelected] * 60}
        colors={colorsHex[optionSelected]}
        colorsTime={[
          60 * selectedValue,
          45 * selectedValue,
          30 * selectedValue,
          15 * selectedValue,
        ]}
        onComplete={() => {
          dispatch(increaseTimerCountAfterPomodoro());
        }}
      >
        {children}
      </CountdownCircleTimer>
    </Grid>
  );
};

export default MinutesSecondsCountdown;
