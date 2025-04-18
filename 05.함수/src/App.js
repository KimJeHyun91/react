import './App.css';

const user={
  name:"나강아"
  , age:"10"
  , hobby:"뛰어 놀기"
}

function Info(z){
  return "이름 : "+z.name+" 나이 "+z.age+" 취미 : "+z.hobby;
}

function Kaomoji(){
  return(
    <>
      <h2>(┬┬﹏┬┬)</h2>
      <h2>(❁´◡`❁)</h2>
      <h2>(●'◡'●)</h2>
      <h2>(*/ω＼*)</h2>
      <h2>(^///^)</h2>
      <h2>╰(*°▽°*)╯</h2>
    </>
  );
}

function App() {
  const flag=true;
  return (
    <div className="App">
      <h1>(❁´◡`❁)</h1>

      { flag===true? <h1>{Info(user)}</h1> : "(┬┬﹏┬┬)" }

      <Kaomoji></Kaomoji>

    </div>
  );
}

export default App;
