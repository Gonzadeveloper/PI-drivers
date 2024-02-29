import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    name: "",
    last_name: "",
    description: "",
    image: "",
    birthdate: "",
    nationality:"",
    teams: [],
}

export const userSlice = createSlice ({ 
    name: "user",
    initialState,
    reducers: { addUser: (state, action ) => {
        const  { name, last_name, description, image, birthdate, nationality, teams } = action.payload;
        
        state.name = name;
        state.last_name = last_name;
        state.description = description;
        state.image= image;
        state.birthdate = birthdate;
        state.nationality = nationality;
        state.teams = teams
    }}
})

export const {addUser}= userSlice.actions;
export default userSlice.reducer;