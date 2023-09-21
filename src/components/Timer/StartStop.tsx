import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  body: {
    marginTop: 20,
  },
});

const StartStop = () => {
  const classes = styles();
  return (
    <Grid item className={classes.body}>
      <Button variant="contained">
        <Typography>Start</Typography>
      </Button>
    </Grid>
  );
};

export default StartStop;
