import {useState} from 'react';


function Counter(){
    /*
        Hook : react에서 상태관리를 위한 코드
        useState 사용
        const [변수명, 업데이트함수명]=userState(초기값);
        - 변수명 : 현재 상태 변수
        - 업데이트 함수명 : 호출시 현재의 상태값을 변경할 수 있음
    */
    const [count, setCount]=useState(0);
    return(
        <> 
            <h1>{count}</h1>
            <button onClick={function(){return setCount(count+1)}}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </>
    );
}


export default Counter;