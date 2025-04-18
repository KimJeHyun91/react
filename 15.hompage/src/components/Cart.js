import {Provider, useDispatch, useSelector} from "react-redux";
import { change_id, change_name } from "../store/UserSlice";
import cart, { change_quantity_increase, change_quantity_decrease } from "../store/CartSlice";
import { useEffect } from "react";

function Cart({product_list, set_product_list}){
    let dispatch=useDispatch();
    let user=useSelector((state)=>state.user);
    let cart_list=useSelector((state)=>state.cart);

    let new_cart_list=[];
    for(let z of cart_list){
        for(let y of product_list){
            if(z.id==y.id){
                new_cart_list.push(y);
            }
        }
    }
    
    
    useEffect(()=>{
        localStorage.setItem("cart_list", JSON.stringify(cart_list));        
    }, [cart_list])

    return(
        <div id="cart">
            <table id="cart_table">
                <thead>
                    <tr>
                        <td>상품정보</td>
                        <td>옵션/수량</td>
                        <td>상품금액</td>
                    </tr>
                </thead>
                <tbody>
                    {new_cart_list.map((value)=>{
                        let quantity=0;
                        for(let z of cart_list){
                            if(value.id==z.id){
                                quantity=z.quantity;
                            }
                        }

                        return(
                            <tr>
                                <td>{value.name}</td>
                                <td>
                                    <button style={{width:"20px", backgroundColor:"white", border:"1px solid"}} onClick={()=>{
                                        dispatch(change_quantity_decrease(value.id))
                                    }}>-</button>
                                    &ensp;{quantity}&ensp;
                                    <button style={{width:"20px", backgroundColor:"white", border:"1px solid"}} onClick={()=>{
                                        dispatch(change_quantity_increase(value.id))
                                    }}>+</button>
                                </td>
                                <td>{value.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;