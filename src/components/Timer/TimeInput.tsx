import { Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const style = makeStyles({
  inputStyle: {
    width: 100,
  },
  container: {
    width: "50%",
    marginTop: 20,
  },
});

const TimeInput = () => {
  const classes = style();

  return (
    <Grid
      item
      container
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.container}
    >
      <Grid>
        <Grid item container direction="column">
          <Typography>Pomodoro</Typography>
          <TextField className={classes.inputStyle} />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography>Short break</Typography>
          <TextField className={classes.inputStyle} />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container direction="column">
          <Typography>Long timer</Typography>
          <TextField className={classes.inputStyle} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimeInput;
