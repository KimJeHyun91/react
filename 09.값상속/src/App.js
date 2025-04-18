import './App.css';
import Component from './components/Component';
import Button from './components/Button';

// function App() {
//   let address="서울시 송파구";
//   return (
//     <div className="App">
//       <Component name={"나강아"} address={address}></Component>
//     </div>
//   );
// }

// function App(){
//   const user={
//     name:"나강아"
//     , address:"서울시 강남구"
//     , hobby:["간식먹기", "산책하기", "뛰어놀기"]
//   }
//   return(
//     <>
//     {/* 방법 1 <Component user={user}></Component> */}
//     </>
//   )
// }

// function App(){
//   const user={
//     name:"나강아"
//     , address:"서울시 강남구"
//     , hobby:["간식먹기", "산책하기", "뛰어놀기"]
//   }
//   return(
//     <>
//       <Component {...user}></Component>
//     </>
//   )
// }

function App(){
  return(
    <>
      <Component></Component>
    </>
  )
}

export default App;
