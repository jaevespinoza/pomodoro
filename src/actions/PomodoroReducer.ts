import { createSlice } from "@reduxjs/toolkit";

export type TimerOption = "work-timer" | "short-break" | "long-break";

/**
 * Pomodoro's state interface that allows us to define what
 * will be inside the state
 */
export interface IPomodoroState {
  /**
   * Option selected for the timer. It can be either working time,
   * short break, or a long break
   */
  option: TimerOption;
  /**
   * Object that will hold each one of the assigned timers
   */
  timer: {
    [key in TimerOption]: number;
  };
  /**
   * List of tasks that need to be finished
   */
  tasks: any[];
}

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    option: "work-timer",
    timer: {
      "work-timer": 0,
      "short-break": 0,
      "long-break": 0,
    },
  } as IPomodoroState,
  reducers: {
    /**
     * Action that will set the option selected for the timer
     * @param state Previous state of the application
     * @param payload The payload of the action dispatched
     */
    setOption: (state, { payload }) => {
      state.option = payload;
    },
    /**
     * Action that will set the timer for the working time
     */
    setWorkTimer: (state, { payload }) => {
      state.timer["work-timer"] = payload;
    },
    /**
     * Action that will set the timer for the short break
     */
    setShortBreak: (state, { payload }) => {
      state.timer["short-break"] = payload;
    },
    /**
     * Action that will set the timer for the long break
     */
    setLongBreak: (state, { payload }) => {
      state.timer["long-break"] = payload;
    },
  },
});

export const { setOption, setWorkTimer, setShortBreak, setLongBreak } =
  pomodoroSlice.actions;

export default pomodoroSlice.reducer;
