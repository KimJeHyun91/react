import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import {useState, useEffect, createContext} from "react";
import { createCookie, Link, Route, Routes } from 'react-router-dom';
import FrontImg from './components/FrontImg';
import ProductDetail from "./components/ProductDetail";
import Cart from './components/Cart';
import axios from "axios";



function App() {
  const [product_list, set_product_list]=useState([]);
  const [cart_list, set_cart_list]=useState([]);

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/KimJeHyun91/DATA/refs/heads/main/data1.json")
    .then((response)=>{
      set_product_list([...response.data]);
    })
    .catch(()=>{
      alert("데이터 가져오기 실패");
    });
  }, [])

  // JSON.stringify(객체)
  // JSON.parse(객체)

  // localStorage.setItem(문자열, 배열)
  // localStorage.getItem(문자열, 배열)
  // localStorage.removeItem(문자열, 배열)
  
  useEffect(()=>{
    localStorage.setItem("recent_product", JSON.stringify([]));
  }, [])

  

  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={
          <>
            <FrontImg></FrontImg>
            <Body product_list={product_list} set_product_list={set_product_list}></Body>
            <Footer></Footer>
          </>
        }/>
        <Route path="/detail" element={
          <>
            <ProductDetail product_list={product_list} set_product_list={set_product_list} cart_list={cart_list} set_cart_list={set_cart_list}></ProductDetail>
          </>
        }/>
        <Route path="/cart" element={
          <>
            <Cart product_list={product_list} set_product_list={set_product_list} cart_list={cart_list} set_cart_list={set_cart_list}></Cart>
          </>
        }/>
      </Routes>
      
    </div>
  );
}



export default App;
