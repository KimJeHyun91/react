import './App.css';
import Counter from './component/Counter';
import LightOnOff from './component/LightOnOff';
import MemberEnroll from './component/MemberEnroll';

function App() {
  return (
    <div className="App">
      <MemberEnroll></MemberEnroll>
      <Counter></Counter>
      <LightOnOff></LightOnOff>
    </div>
  );
}

export default App;
