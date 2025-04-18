import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Modify from "./pages/Modify";
import { useEffect, useState } from 'react';
import Navigation from './component/Navigation';
import List from './component/List';

function App() {
  const [id, set_id]=useState(0);
  const [month, set_month]=useState(new Date().getMonth()+1);
  const [year, set_year]=useState(new Date().getFullYear());
  const [list_flag, set_list_flag]=useState(false);
  const [playing_with_emoji_flag, set_playing_with_emoji_flag]=useState(false);
  let playing_with_emoji_number=Math.ceil(Math.random()*10);

  
  useEffect(()=>{
    if(localStorage.getItem("user_data")==null){
      localStorage.setItem("user_data", JSON.stringify([]));
    }
    if(localStorage.getItem("user_data_id")==null){
      localStorage.setItem("user_data_id", 0);
    }else{
      let temp=parseInt(localStorage.getItem("user_data_id"));
      set_id(temp+1)
    }
  }, [])

  return (
    <div>
      <Navigation list_flag={list_flag} set_list_flag={set_list_flag}></Navigation>
      <Routes>
        <Route path='/' element={
          <>
            <List month={month} year={year} list_flag={list_flag}></List>
            <button id='playing_with_emoji_button' onClick={()=>{set_playing_with_emoji_flag(!playing_with_emoji_flag)}}>이모지와 놀기</button>
            {playing_with_emoji_flag?<img id='playing_with_emoji_img' src={playing_with_emoji_number<10?process.env.PUBLIC_URL+`/img/emoji00${playing_with_emoji_number}.png`:process.env.PUBLIC_URL+`/img/emoji0${playing_with_emoji_number}.png`}></img>:null}
          </>
        }></Route>
        <Route path='/New' element={
          <>
            <New id={id} set_id={set_id}></New>
          </>
        }></Route>
        <Route path='/Detail' element={
          <>
            <Detail></Detail>
          </>
        }></Route>
        <Route path='Modify/' element={
          <>
            <Modify></Modify>
          </>
        }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
