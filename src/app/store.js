import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from "../redux/gh/repositoriesSlice"
import actionsReducer from "../redux/gh/actionsSlice"

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    action: actionsReducer
  },
});
