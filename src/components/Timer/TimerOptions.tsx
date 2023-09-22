import { Grid, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { setOption } from "../../actions/PomodoroReducer";
import "./styles.scss";

/**
 * Row component that shows the options the user has to select:
 * Pomodoro timer, short break, or long break.
 */
const TimerOptions = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.pomodoro.option
  );

  const dispatch = useDispatch();

  return (
    <Grid item sx={{ width: "50%" }}>
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <Button
            disableRipple
            sx={{
              backgroundColor:
                selectedOption === "work-timer"
                  ? "rgba(108, 122, 137, 0.8)"
                  : "none",
              transition: "background-color 0.3s ease",
            }}
            variant="text"
            onClick={() => dispatch(setOption("work-timer"))}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: selectedOption === "work-timer" ? 600 : 400,
              }}
            >
              Pomodoro
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            disableRipple
            sx={{
              backgroundColor:
                selectedOption === "short-break"
                  ? "rgba(108, 122, 137, 0.8)"
                  : "none",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => dispatch(setOption("short-break"))}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: selectedOption === "short-break" ? 600 : 400,
              }}
            >
              Short break
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableRipple
            sx={{
              backgroundColor:
                selectedOption === "long-break"
                  ? "rgba(108, 122, 137, 0.8)"
                  : "none",
              transition: "background-color 0.3s ease",
            }}
            variant="text"
            onClick={() => dispatch(setOption("long-break"))}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: selectedOption === "long-break" ? 600 : 400,
              }}
            >
              Long break
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimerOptions;
