import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Estado inicial
const initialState = {
    list: [],
};

export const driversSlice = createSlice({
    name: "drivers",
    initialState,
    reducers: {
        setDriversList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setDriversList } = driversSlice.actions;

export default driversSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
    axios
    .get(`${import.meta.env.VITE_ENDPOINT}/drivers`) // Corregido el error en la URL
    .then((response) => {
        dispatch(setDriversList(response.data));
    })
    .catch((error) => console.error(error));
};
