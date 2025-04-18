import { useState } from "react";

function MemberEnroll(){
    const [input, set_input]=useState({
        name:""
        , birthday:""
        , address:""
        , introduce:""
    });
    const OnChange=(event)=>{
        console.log(event.target.name+" : "+event.target.value);
        set_input({
            ...input,   // input 객체 얕은 복사. 기존상태 그대로 유지
            [event.target.name]:event.target.value
        })
    }

    return(
        <>
            <h1>어서오세요 유토피아의 회원에 가입</h1>
            <label for="input_name">이름</label><br></br>
            <input type="text" id="input_name" name="name" onChange={OnChange} value={input.name}></input><br></br>
            <label for="input_birthday">생년월일</label><br></br>
            <input type="date" id="input_birthday" name="birthday" onChange={OnChange}></input><br></br>
            <label for="input_address">주소</label><br></br>
            <select name="address" onChange={OnChange}>
                <option value="" selected>선택</option>
                <option value="songpagu">송파구</option>
                <option value="gangnam">강남구</option>
            </select><br></br>
            <label for="input_introduce">자기소개</label><br></br>
            <textarea id="input_introduce" name="introduce" onChange={OnChange}></textarea>
        </>
    );
}

export default MemberEnroll;