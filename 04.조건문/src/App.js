import './App.css';

function App() {
  const flag=true;

  // if문 사용 가능
  if(flag){
    <h1>나는 강아지~~</h1>
  }else{
    <h1>나는 고양이~~</h1>
  }

  return (
    <div className="App">
      {/* if문 사용 불가 */}
      {/* 삼항연산자 사용가능 */}  
      <h1>
        {flag==true?"나는 강아지":"나는 고양이"}
      </h1>
    </div>
  );
}

export default App;
