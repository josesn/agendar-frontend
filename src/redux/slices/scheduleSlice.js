import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    schedulings: [],
    scheduling: ""
}

export const slice = createSlice({
    name: 'schedulings',
    initialState,
    reducers: {
        setSchedulings(state, { payload }) {
            return {...state, schedulings: payload}
        }
    }
})

export const { setSchedulings } = slice.actions

export const selectUser = state => state.schedules

export default slice.reducer