import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    forwardCurrentStep: (state, action) => {
      state.currentStep = 2;
    },
    finalStep: (state, action) => {
      state.currentStep = 3;
    },
  },
});

export const { forwardCurrentStep, finalStep } = stepperSlice.actions;
export default stepperSlice.reducer;
