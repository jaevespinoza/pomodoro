import { configureStore } from "@reduxjs/toolkit";
import PomodoroReducer from "../actions/PomodoroReducer";

/**
 * Main Store that will be used to dispatch and handle the application's state
 */
export const store = configureStore({
  reducer: {
    pomodoro: PomodoroReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
