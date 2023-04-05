import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        vin_number: "VIN Number",
        year: "Year",

    },
    reducers: {
        chooseMake: (state, action) => {
            state.make = action.payload
        },
        chooseModel: (state, action) => {
            state.model = action.payload
        },
        chooseVinNumber: (state, action) => {
            state.vin_number = action.payload
        },
        chooseYear: (state, action) => {
            state.year = action.payload
         
    }
}})
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseVinNumber, chooseYear } = rootSlice.actions;

