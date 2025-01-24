import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamFilter: "All",          // Filtro de equipo
  nameFilter: "disabled",    // Filtro de nombre
  birthdateFilter: "disabled", // Filtro de fecha de nacimiento
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTeamFilter: (state, action) => {
      state.teamFilter = action.payload;
    },
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
    setBirthdateFilter: (state, action) => {
      state.birthdateFilter = action.payload;
    }
  }
});

export const { setTeamFilter, setNameFilter, setBirthdateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
