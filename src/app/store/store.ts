import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { testSlice } from '../../features/scratch/testSlice'
import { eventSlice } from '../../features/events/eventSlice'
import { modalSlice } from '../common/modals/modalSlice'
import { authSlice } from '../../features/auth/authSlice'
import { profileSlice } from '../../features/profiles/profileSlice'
import { photoSlice } from '../../features/profiles/photosSlice'

export const store = configureStore({
  reducer: { test: testSlice.reducer ,
    events: eventSlice.reducer,
    modals : modalSlice.reducer,
    auth : authSlice.reducer,
    profiles : profileSlice.reducer,
    photos : photoSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()