import { Grid, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { setIsPlaying } from "../../actions/PomodoroReducer";

const StartStop = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.pomodoro.isPlaying);

  return (
    <Grid item sx={{ marginTop: "20px" }}>
      <Button
        variant="contained"
        disableFocusRipple
        disableRipple
        disableTouchRipple
        onClick={() => dispatch(setIsPlaying(!isPlaying))}
      >
        <Typography>{isPlaying ? "Stop" : "Start"}</Typography>
      </Button>
    </Grid>
  );
};

export default StartStop;
