import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { increaseTimerCountAfterPomodoro } from "../../actions/PomodoroReducer";
import StyledTypography from "../../shared/StyledTypography";

type HexColor = [`#${string}`, `#${string}`, `#${string}`, `#${string}`];

// Work Time Colors (HEX)
const workTimeColorsHex: HexColor = [
  "#00B894",
  "#00B894",
  "#00B894",
  "#00B894",
];

// Short Break Colors (HEX)
const shortBreakColorsHex: HexColor = [
  "#1ABC9C",
  "#1ABC9C",
  "#1ABC9C",
  "#1ABC9C",
];

// Long Break Colors (HEX)
const longBreakColorsHex: HexColor = [
  "#6C5CE7",
  "#6C5CE7",
  "#6C5CE7",
  "#6C5CE7",
];

const colorsHex = {
  "work-timer": workTimeColorsHex,
  "short-break": shortBreakColorsHex,
  "long-break": longBreakColorsHex,
};

// Audio played once it's done
const sfx = new Audio("./done.mp3");

/**
 * Circular progress bar that shows the amount of time
 * left and a progression bar that depletes as the time comes to a close
 * It uses the CountdownCircleTimer component from react-countdown-circle-timer
 */
const MinutesSecondsCountdown = () => {
  const optionSelected = useSelector(
    (state: RootState) => state.pomodoro.option
  );

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const timerValues = useSelector((state: RootState) => state.pomodoro.timer);
  const isPlaying = useSelector((state: RootState) => state.pomodoro.isPlaying);
  const dispatch = useDispatch();

  const children = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <StyledTypography variant="h3">{`${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`}</StyledTypography>
    );
  };

  const selectedValue = timerValues[optionSelected];

  return (
    <Grid
      item
      sx={{
        marginTop: "20px",
      }}
    >
      <CountdownCircleTimer
        key={optionSelected}
        isPlaying={isPlaying}
        size={isMediumScreen ? 120 : 180}
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
