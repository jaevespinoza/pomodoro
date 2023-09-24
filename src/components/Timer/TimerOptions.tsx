import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { setIsPlaying, setOption } from "../../actions/PomodoroReducer";
import "./styles.scss";
import StyledButton from "../../shared/StyledButton";
import StyledTypography from "../../shared/StyledTypography";

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
          <StyledButton
            disableRipple
            isSelected={selectedOption === "work-timer"}
            variant="text"
            onClick={() => {
              dispatch(setOption("work-timer"));
              dispatch(setIsPlaying(false));
            }}
          >
            <StyledTypography isSelected={selectedOption === "work-timer"}>
              Pomodoro
            </StyledTypography>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton
            variant="text"
            isSelected={selectedOption === "short-break"}
            disableRipple
            onClick={() => {
              dispatch(setOption("short-break"));
              dispatch(setIsPlaying(false));
            }}
          >
            <StyledTypography isSelected={selectedOption === "short-break"}>
              Short break
            </StyledTypography>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton
            disableRipple
            isSelected={selectedOption === "long-break"}
            variant="text"
            onClick={() => {
              dispatch(setOption("long-break"));
              dispatch(setIsPlaying(false));
            }}
          >
            <StyledTypography isSelected={selectedOption === "long-break"}>
              Long break
            </StyledTypography>
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimerOptions;
