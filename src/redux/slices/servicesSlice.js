import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'services',
    initialState: {
        services: [],
        service: '',
    },
    reducers: {
        setService(state, { payload }) {
            return {...state, service: payload}
        },
        setAllServices(state, { payload }) {
            return {...state, services: payload}
        }
        
    }
})

export const { setService, setAllServices } = slice.actions

export const selectUser = state => state.services

export default slice.reducer