import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';
import {useState, useRef} from "react";

function App() {
  const [id, set_id]=useState(1);

  const [list, set_list]=useState([]);
  
  function create_item(content){
    set_id(id+1);
    let input_id=id;
    const new_item={
      item_id:input_id
      , item_done:false
      , item_content:content
      , item_year:new Date().getFullYear()
      , item_month:new Date().getMonth()
      , item_day:new Date().getDay()
      , item_hours:new Date().getHours()
      , item_minutes:new Date().getMinutes()
      , item_seconds:new Date().getSeconds()
    };
    let copy=[...list];
    copy.push(new_item);
    set_list(copy);
  }

  return (
    <div className="App">
      <Header></Header>
      <Editor create_item={create_item}></Editor>
      <List list={list} set_list={set_list}></List>
      <h1>리스트</h1>




      {list.map((value, index)=>{
        return(
          <div>
            <h2>아이디 : {value.item_id}</h2>
            <h2>완료여부 : {value.item_done?"done":"not done"}</h2>
            <h2>내용 : {value.item_content}</h2>
            <h2>날짜 : {value.item_year}년 {value.item_month}월 {value.item_day}일 {value.item_hours}시 {value.item_minutes}분 {value.item_seconds}초</h2>
          </div>
        );
      })}

    </div>
  );
}

export default App;
