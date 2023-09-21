import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const TimerOptionsStyle = makeStyles({
  buttonContainer: {
    width: "50%",
  },
});

const TimerOptions = () => {
  const classes = TimerOptionsStyle();

  return (
    <Grid item className={classes.buttonContainer}>
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <Button variant="text">
            <Typography>Pomodoro</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text">
            <Typography>Short break</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text">
            <Typography>Long break</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimerOptions;
