import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "Redux/User/UserSlice"

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})