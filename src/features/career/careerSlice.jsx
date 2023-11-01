// careerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  careerData: [],
  isLoading: false, 
  selectedLocation: "",
  filteredData: [],
  searchTerm: "",
  careerId: null,
};

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    setCareerData: (state, action) => {
      state.careerData = action.payload;
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
    setCareerId: (state, action) => {
      state.careerId = action.payload;
    },
  },
});

export const {
  setCareerData,
  setSelectedLocation,
  setFilteredData,
  setSearchTerm,
  setCareerId,
  setIsLoading
} = careerSlice.actions;

export const selectCareerData = (state) => state.careers.careerData;
export const selectSelectedLocation = (state) => state.careers.selectedLocation;
export const selectFilteredData = (state) => state.careers.filteredData;
export const selectSearchTerm = (state) => state.careers.searchTerm;
export const selectCareerId = (state) => state.careers.careerId;

export default careerSlice.reducer;
