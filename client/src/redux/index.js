import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './slices/drivers/index' 
import filtersReducer from './slices/drivers/filtersSlice'

export default configureStore({
    reducer:{
        drivers: driversReducer,
        filters: filtersReducer,  // Agrega el nuevo slice aquí
    }
})