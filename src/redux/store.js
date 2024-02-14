import { configureStore } from "@reduxjs/toolkit";

import scheduleReducer from './slices/scheduleSlice'
import serviceReducer from './slices/servicesSlice'
import userReducer from './slices/userSlice'
import vehicleReducer from './slices/vehicleSlice'

const store = configureStore({
    reducer: {
        schedulings: scheduleReducer,
        users: userReducer,
        services: serviceReducer,
        vehicles: vehicleReducer,
    },
});

export default store;