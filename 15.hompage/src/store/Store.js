import {configureStore} from "@reduxjs/toolkit";
import user from "./UserSlice";
import cart from "./CartSlice";

export default configureStore({
    reducer:{
        user:user.reducer
        , cart:cart.reducer
    }
})