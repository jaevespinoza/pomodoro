import { Grid, Paper, Typography } from "@mui/material";
import TimerOptions from "../Timer/TimerOptions";
import CurrentTime from "../Timer/CurrentTime";
import TimeInput from "../Timer/TimeInput";
import StartStop from "../Timer/StartStop";

const headerHeight = "50px";

const ApplicationBody = () => {
  return (
    <Grid container direction="column" sx={{ width: "100vw", height: "100vh" }}>
      <Grid
        item
        sx={{ width: "100%", height: headerHeight, position: "sticky" }}
      >
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
        sx={{
          width: "100%",
          height: `calc(100% - ${headerHeight})`,
          padding: "10px",
        }}
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
