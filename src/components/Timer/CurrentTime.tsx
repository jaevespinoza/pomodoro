import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const styles = makeStyles({
  body: {
    marginTop: 20,
  },
});

const MinutesSecondsCountdown = () => {
  const classes = styles();
  const children = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <Typography variant="h3">{`${minutes}:${
        seconds === 0 ? "00" : seconds
      }`}</Typography>
    );
  };

  return (
    <Grid item className={classes.body}>
      <CountdownCircleTimer
        isPlaying={false}
        duration={25 * 60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[25 * 60, 25 * 45, 25 * 30, 25 * 15]}
      >
        {children}
      </CountdownCircleTimer>
    </Grid>
  );
};

export default MinutesSecondsCountdown;
