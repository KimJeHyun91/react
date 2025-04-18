import './App.css';
import Controller from './component/Controller';
import View from './component/View';
import { useState } from 'react';

function App() {
  const [count, set_count]=useState(0);
  function on_click_button(value){
    set_count(count+value);
  }
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>Counter</h1>
      <View count={count}></View>
      <Controller count={count} on_click_button={on_click_button}></Controller>
    </div>
  );
}

export default App;
