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
   * Boolean that handles the start of the timer
   */
  isPlaying: boolean;
  /**
   * Number of pomodoro timers that have passed
   */
  timerCount: number;
  /**
   * Number of long break timers
   */
  longBreakCount: number;
  /**
   * Number of short break timers
   */
  shortBreakCount: number;
}

// Pattern that checks whether the input is a number and below than 60.
const pattern: RegExp = /^$|^[0-9]$|^[1-5][0-9]$/;

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    option: "work-timer",
    isPlaying: false,
    timerCount: 0,
    shortBreakCount: 0,
    longBreakCount: 0,
    timer: {
      "work-timer": 25,
      "short-break": 5,
      "long-break": 15,
    },
  } as IPomodoroState,
  reducers: {
    /**
     * Action that will set the option selected for the timer
     * @param state Previous state of the application
     * @param payload The payload of the action dispatched
     */
    setOption: (state, { payload }: { payload: TimerOption }) => {
      state.option = payload;
    },
    /**
     * Action that will set the timer for the working time
     */
    setWorkTimer: (state, { payload }) => {
      if (pattern.test(payload)) state.timer["work-timer"] = payload;
    },
    /**
     * Action that will set the timer for the short break
     */
    setShortBreak: (state, { payload }) => {
      if (pattern.test(payload)) state.timer["short-break"] = payload;
    },
    /**
     * Action that will set the timer for the long break
     */
    setLongBreak: (state, { payload }) => {
      if (pattern.test(payload)) state.timer["long-break"] = payload;
    },
    /**
     * Action that will start or stop the timer
     */
    setIsPlaying: (state, { payload }) => {
      state.isPlaying = payload;
    },
    /**
     * Action that increases the amount of pomodoro timers that have
     * passed
     */
    setTimerCount: (state, { payload }) => {
      state.timerCount = payload;
    },
    /**
     * Once any timer has completed, the state stops the timer
     * and checks: if it's a pomodoro timer, it increases the count,
     * and if a multiple of 4 timers have happened, the application switches to a long break.
     * Otherwise, it switches to a short break.
     */
    increaseTimerCountAfterPomodoro: (state) => {
      state.isPlaying = false;
      if (state.option === "work-timer") {
        state.timerCount += 1;
        if (state.timerCount % 4 === 0) {
          state.option = "long-break";
        } else state.option = "short-break";
      } else if (state.option === "long-break") {
        state.longBreakCount += 1;
        state.option = "work-timer";
      } else {
        state.shortBreakCount += 1;
        state.option = "work-timer";
      }
    },
  },
});

export const {
  setOption,
  setWorkTimer,
  setShortBreak,
  setLongBreak,
  setTimerCount,
  increaseTimerCountAfterPomodoro,
  setIsPlaying,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
