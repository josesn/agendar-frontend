import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'vehicles',
    initialState: {
        vehicles: [],
        vehicle: '',
    },
    reducers: {
        setVehicle(state, { payload }) {
            return {...state, vehicle: payload}
        },
        setAllVehicles(state, { payload }) {
            return {...state, vehicles: payload}
        }
        
    }
})

export const { setVehicle, setAllVehicles } = slice.actions

export const selectUser = state => state.services

export default slice.reducer