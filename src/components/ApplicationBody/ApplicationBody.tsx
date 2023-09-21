import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TimerOptions from "../Timer/TimerOptions";
import CurrentTime from "../Timer/CurrentTime";
import TimeInput from "../Timer/TimeInput";
import StartStop from "../Timer/StartStop";

const headerHeight = "50px";

const ApplicationBodyStyles = makeStyles({
  appDimensions: {
    width: "100vw",
    height: "100vh",
  },
  headerDimensions: {
    width: "100%",
    height: headerHeight,
    position: "sticky",
  },
  bodyDimensions: {
    width: "100%",
    height: `calc(100% - ${headerHeight})`,
    padding: "10px",
  },
});

const ApplicationBody = () => {
  const classes = ApplicationBodyStyles();

  return (
    <Grid container direction="column" className={classes.appDimensions}>
      <Grid item className={classes.headerDimensions}>
        <Grid
          component={Paper}
          elevation={1}
          container
          justifyContent="center"
          height={headerHeight}
          alignItems="center"
        >
          <Grid item>
            <Typography>Pomodoro!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.bodyDimensions}
        container
        direction="column"
        wrap="nowrap"
        alignItems="center"
      >
        <TimerOptions />
        <CurrentTime />
        <TimeInput />
        <StartStop />
      </Grid>
    </Grid>
  );
};

export default ApplicationBody;
