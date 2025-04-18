import Button from "./Button";

// function Component(props){
//     return(
//         <>
//             <h4><u>{props.name}</u>님의 주소는 <u>{props.address}</u>입니다.</h4>
//         </>
//     );
// }

// function Component(props){
//     return(
//         <>
//             {/* 방법 1 <h4><u>{props.user.name}</u>님의 주소는 <u>{props.user.address}</u>이고 취미는 <u>{props.user.hobby[0]}, {props.user.hobby[1]}, {props.user.hobby[2]}</u>입니다.</h4> */}
//         </>
//     )
// }

// function Component({name, address, hobby}){
//     return(
//         <>
//             <h4><mark>{name}</mark>님의 주소는 <mark>{address}</mark>이고 취미는 <mark>{hobby[0]}, {hobby[1]}, {hobby[2]}</mark>입니다.</h4>
//         </>
//     )
// }

function Component(){
    const button_props={
        test:"1번버튼"
        , color:"blue"
        , a:1
        , b:2
        , c:3
    }
    function button_click(event){
        console.log(event);
        console.log(event.target.name);
    }
    return(
        <>
            <h3>버튼 만들기</h3>
            <button onClick={button_click} name="a버튼">A버튼</button>
            <button onClick={()=>{console.log("b버튼")}} name="b버튼">B버튼</button>
            <Button button_props={button_props}></Button>
        </>
    )
}

export default Component;