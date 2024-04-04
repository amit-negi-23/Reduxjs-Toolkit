import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import studentReducer from '../features/addStudent/studentSlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        users : studentReducer
    },
})
