import './App.css';
import { useState } from 'react';

function App() {
  const [count, set_count]=useState([0, 0, 0]);
  const [title, set_title]=useState(["강아지", "고양이", "호랑이"]);
  const [modal, set_modal]=useState(false);
  const [modal_index, set_modal_index]=useState(0);
  const [input_title, set_input_title]=useState("");
  
  return (
    <div className="App">
      <div id="title">
        <h1>귀여운 동물</h1>
      </div>

      {title.map((value, index, array)=>{
        return(
        <div key={index}>
          <h2 className="title" onClick={()=>{set_modal(!modal); set_modal_index(index);}}>{value}</h2>
          <p>04월 09일 <span onClick={()=>{
            let copy=[...count];
            copy[index]=copy[index]+1;
            set_count(copy)
          }}>😍</span> {count[index]}</p>
        </div>)}
      )}
      
      {modal?<Modal title={title} set_title={set_title} modal_index={modal_index} input_title={input_title} set_input_title={set_input_title}></Modal>:null}

    </div>
  );
}


function Modal(props){
  return(
    <>
      <div id="modal">
        <div id="title">
          <h1>{props.title[props.modal_index]}</h1>
        </div>
        <h2>날짜</h2>
        <p>내용</p>
        <input id="title_change" onChange={(event)=>{props.set_input_title(event.target.value)}}></input>
        <button type="button" onClick={()=>{let copy=[...props.title]; copy[props.modal_index]=props.input_title; props.set_title(copy);}}>제목 바꾸기</button>
      </div>
    </>
  )
}

export default App;
