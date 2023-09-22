import { Grid, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { increaseTimerCountAfterPomodoro } from "../../actions/PomodoroReducer";

type HexColor = [`#${string}`, `#${string}`, `#${string}`, `#${string}`];

// Work Time Colors (HEX)
const workTimeColorsHex: HexColor = [
  "#00B894", // Focus Green
  "#00B894",
  "#00B894",
  "#00B894",
];

// Short Break Colors (HEX)
const shortBreakColorsHex: HexColor = [
  "#1ABC9C", // Relaxing Teal
  "#1ABC9C",
  "#1ABC9C",
  "#1ABC9C",
];

// Long Break Colors (HEX)
const longBreakColorsHex: HexColor = [
  "#6C5CE7", // Peaceful Lavender
  "#6C5CE7",
  "#6C5CE7",
  "#6C5CE7",
];

const colorsHex = {
  "work-timer": workTimeColorsHex,
  "short-break": shortBreakColorsHex,
  "long-break": longBreakColorsHex,
};

const sfx = new Audio("./done.mp3");

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
      <Typography variant="h3" sx={{ color: "white" }}>{`${minutes}:${
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
          sfx.play();
          dispatch(increaseTimerCountAfterPomodoro());
        }}
      >
        {children}
      </CountdownCircleTimer>
    </Grid>
  );
};

export default MinutesSecondsCountdown;
