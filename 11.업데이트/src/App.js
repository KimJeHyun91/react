import './App.css';
import Controller from './component/Controller';
import View from './component/View';
import { useEffect, useState } from 'react';

function App() {
  const [count, set_count]=useState(0);
  function on_click_button(value){
    set_count(count+value);
  }
  function reset_button(){
    set_count(count=0);
  }
  
  // mount 될 때
  useEffect(()=>{
    console.log("mount");
  }, [])
  // update 될 때
  useEffect(()=>{
    console.log("every change update");
  })
  // count가 update 될 때
  useEffect(()=>{
    console.log("count update : "+count);
  }, [count])
  // unmount 될 때(return 사용)
  useEffect(()=>{
    return(()=>{
      console.log("unmount");
    })
  })
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>Counter</h1>
      <View count={count}></View>
      <Controller reset_button={reset_button} on_click_button={on_click_button}></Controller>
    </div>
  );
}

export default App;
