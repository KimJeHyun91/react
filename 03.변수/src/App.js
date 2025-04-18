import logo from './logo.svg';
import './App.css';

function App() {
  // 변수나 함수를 정의하여 사용
  // 출력시 {}안에 넣어서 출력
  const name="나강아";
  let hobby="뛰어 놀기";
  var age="10";
  const output_info=()=>{
    return "이름 : "+name+" 취미 : "+hobby+" 나이 : "+age;
  }

  return (
    <div className="App">
      <h1>유토피아에 오신것을 환영합니다.</h1>
      <h2>☆*: .｡. o(≧▽≦)o .｡.:*☆</h2>
      <h3>이름 : {name}</h3>
      <h3>취미 : {hobby}</h3>
      <h3>만나이 : {age-1}</h3>
      <h3>종합 : {output_info()}</h3>
      <br></br>
      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <h3>- boolean 불가</h3>
      <h3>- 배열 불가</h3>
    </div>
  );
}

export default App;
