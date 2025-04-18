import {createSlice} from "@reduxjs/toolkit";

let cart=createSlice({
    name:"cart"
    , initialState:[
        {id:1, quantity:0}
        , {id:2, quantity:0}
        , {id:3, quantity:0}
    ]
    , reducers:{
        change_quantity_increase(state, input_id){
            for(let z=0;z<state.length;z++){
                if(input_id.payload==state[z].id){
                    state[z].quantity+=1
                }
            }
        }
        , change_quantity_decrease(state, input_id){
            for(let z=0;z<state.length;z++){
                if(input_id.payload==state[z].id){
                    state[z].quantity-=1
                }
            }
        }
    }
})

export let {change_quantity_increase, change_quantity_decrease}=cart.actions

export default cart