import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isIncomingCall: false,
  callDetails: {},
  answer: null,
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    setIncomingCall: (state, action) => {
      state.isIncomingCall = action.payload;
    },
    setCallDetails: (state, action) => {
      state.callDetails = action.payload;
    },
    receiveAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { setIncomingCall, setCallDetails, receiveAnswer } =
  callSlice.actions;
export default callSlice.reducer;
