import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryId: null,
  companyName: "",
  emailAddress: "",
  lastname: "",
  firstname: "",
  compId: null,
};

const credentials = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    setCountryId(state, action) {
      state.countryId = action.payload;
    },
    setCompId(state, action) {
      state.compId = action.payload;
    },
    setFirstname(state, action) {
      state.firstname = action.payload;
    },
    setLastname(state, action) {
      state.lastname = action.payload;
    },
    setEmailAddress(state, action) {
      state.emailAddress = action.payload;
    },
    setCompanyName(state, action) {
      state.companyName = action.payload;
    },
  },
});

export const {
  setCountryId,
  setCompanyName,
  setEmailAddress,
  setLastname,
  setFirstname,
  setCompId,
} = credentials.actions;
export default credentials.reducer;
