import {createSlice} from "@reduxjs/toolkit";

let user=createSlice({
    name:"user"
    , initialState:{id:"", name:"김"}
    , reducers:{
        change_id(state, input_id){
            state.id=input_id.payload
        }
        , change_name(state, input_name){
            state.name=input_name.payload
        }
    }

})

export let {change_id, change_name}=user.actions

export default user
