import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { testSlice } from '../../features/scratch/testSlice'
import { eventSlice } from '../../features/events/eventSlice'

export const store = configureStore({
  reducer: { test: testSlice.reducer ,
    events: eventSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()