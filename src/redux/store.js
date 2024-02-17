import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
// import TaskReducer from '../f'
const store = configureStore({
  reducer: {
    task: tasksSlice,
  },
});
export default store;
