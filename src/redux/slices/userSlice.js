import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'users',
    initialState: {
        user: '',
        token: '',
    },
    reducers: {
        setStateUser(state, { payload }) {
            return {...state, user: payload}
        },
    }
})

export const { setStateUser } = slice.actions

export const selectUser = state => state.schedules

export default slice.reducer