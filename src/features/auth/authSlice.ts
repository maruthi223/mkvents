import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppUser } from "../../app/types/user"
import { User } from "firebase/auth"

type State = {
    authenticated: boolean
    currentUser: AppUser | null
    initialised: boolean
}

const initialState: State = {
    authenticated: false,
    currentUser: null,
    initialised: false
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        signIn :{
            reducer : (state,action:PayloadAction<AppUser>)=>{
                state.authenticated = true,
                state.currentUser = action.payload
            },
            prepare :(user:User)=> {
                const mapped:AppUser ={
                    uid: user.uid,
                    photoURL: user.photoURL,
                    email: user.email,
                    displayName: user.displayName,
                    providerId : user.providerData[0].providerId
                }
                return{payload:mapped}
            }
        },
         
        logOut: (state)=>{
            state.authenticated = false,
            state.currentUser = null
        }
    }
    
});

export const {signIn,logOut} = authSlice.actions ;