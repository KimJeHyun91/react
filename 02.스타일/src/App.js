// 1. stype을 별도의 파일로 저장하여 사용
/*
import './App.css';
function App() {
  return (
    <>
      <h1>Welcome to Korea</h1>
      <h3>☆*: .｡. o(≧▽≦)o .｡.:*☆</h3>
      <p className="class1">강아지</p>
      <p id="id1">호랑이</p>
    </>
  );
}
*/

// 2. style을 변수에 객체로 저장하여 사용
/*
function App() {
  const style={
    div:{
      backgroundColor:"blue"
      , margin:"auto"
      , textAlign:"center"
    }
    , h1:{color:"red"}
    , h3:{color:"yellow"}
    , class1:{color:"white"}
    , id1:{color:"pink"}
  }
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Welcome to Korea</h1>
      <h3 style={style.h3}>☆*: .｡. o(≧▽≦)o .｡.:*☆</h3>
      <p style={style.class1}>강아지</p>
      <p style={style.id1}>호랑이</p>
    </div>
  );
}
*/

// 3. inline방식으로 style 주기
function App() {
  return (
    <div style={{margin:"auto", textAlign:"center"}}>
      <h1 style={{color:"red"}}>Welcome to Korea</h1>
      <h3 style={{color:"yellow"}}>☆*: .｡. o(≧▽≦)o .｡.:*☆</h3>
      <p style={{color:"green"}}>강아지</p>
      <p style={{color:"blue"}}>호랑이</p>
    </div>
  );
}

export default App;
