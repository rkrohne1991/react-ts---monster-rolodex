import { createSelector } from "@reduxjs/toolkit";

const selectErrorReducer = (state: any) => state.error;

export const selectError = createSelector(
  [selectErrorReducer],
  (error) => error
);