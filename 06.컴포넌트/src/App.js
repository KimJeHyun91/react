import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import C1 from './component/C1.js';

/*
  컴포넌트의 구성요소
  1) property(props)
  - 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터(자식 컴포넌트에서는 수정 할 수 없음)
  2) state
  - 컴포넌트의 상태를 저장하고 수정 가능한 데이터
  3) context
  - 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터

  컴포넌트의 종류
  - 함수 컴포넌트
  - 클래스 컴포넌트
*/

function App() {
  return (
    <div className="App" style={{margin:"auto", textAlign:"center"}}>
    <Header></Header>
    <Body></Body>
    <C1></C1>
    <C1></C1>
    <Footer></Footer>
    </div>
  );
}

export default App;
