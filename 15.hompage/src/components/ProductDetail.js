import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect, useContext} from "react";
import { change_id, change_name } from "../store/UserSlice";
import { change_quantity_increase } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";


function Product({product_list, set_product_list}){
    let dispatch=useDispatch();
    let cart_list=useSelector((state)=>state.cart);
    const location=useLocation();
    const id=location.state.id;
    const navi=useNavigate();
    console.log("제품 id :"+id);

    let product=product_list.filter((value, index)=>{
        return value.id==id;
    })

    useEffect(()=>{
        let temp1=localStorage.getItem("recent_product");
        let recent_product=JSON.parse(temp1);
        recent_product.push(id);
        localStorage.setItem("recent_product", JSON.stringify(recent_product));
    }, [])
        
    
    return(
        <div id="product_detail">
            <div id="product_detail_img">
                <img src={product[0].img}></img> 
            </div>
            <div id="product_detail_intro">
                <br></br>
                <br></br>
                <br></br>
                <div style={{fontSize:"2em"}}>
                    {product[0].name}
                </div>
                <br></br>
                <hr style={{width:"300px", margin:"auto"}}></hr>
                <br></br>
                <div style={{fontSize:"1.5em", fontWeight:"600"}}>
                    {product[0].price}
                </div>
                <br></br>
                <button style={{width:"100px", cursor:"pointer", backgroundColor:"white", padding:"10px"}}>구매</button>&emsp;
                <button style={{width:"100px", cursor:"pointer", backgroundColor:"white", padding:"10px"}} onClick={()=>{
                    dispatch(change_quantity_increase(product[0].id))
                }}>장바구니</button>

            </div>
        </div>
    );
}

export default Product;