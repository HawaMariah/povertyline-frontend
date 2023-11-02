// jobslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: [],
  isLoading: false, 
  selectedLocation: "",
  filteredData: [],
  searchTerm: "",
  jobId: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.jobData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setJobId: (state, action) => {
      state.jobId = action.payload;
    },
  },
});

export const {
  setJobData,
  setSelectedLocation,
  setFilteredData,
  setSearchTerm,
  setJobId,
  setIsLoading
} = jobSlice.actions;

export const selectJobData = (state) => state.jobs.jobData;
export const selectSelectedLocation = (state) => state.jobs.selectedLocation;
export const selectFilteredData = (state) => state.jobs.filteredData;
export const selectSearchTerm = (state) => state.jobs.searchTerm;
export const selectJobId = (state) => state.jobs.jobId;

export default jobSlice.reducer;
