import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function Detail(){
    const location=useLocation();
    const id=location.state.id;
    const user_data=JSON.parse(localStorage.getItem("user_data"));
    const data=user_data.filter((value)=>{
        return Object.values(value.id)[0]==id;
    })[0];
    const emotion_number=Object.values(data.emotion)[0];
    const date=Object.values(data.create_date)[0];
    const navigate=useNavigate();

    return(
        <div id="detail">
            <div id="detail_title">제목</div>
            <div id="detail_user_title">{Object.values(data.title)[0]}</div>
            <div id="detail_create_date">작성일</div>
            <div id="detail_user_create_date">{date}</div>
            <div id="detail_content">내용</div>
            <div id="detail_user_content">{Object.values(data.content)[0]}</div>
            <div id="detail_emotion">
                <span>
                    그날의 감정
                    <img className="emoji_img" src={emotion_number<10?process.env.PUBLIC_URL+`/img/emoji00${emotion_number}.png`:process.env.PUBLIC_URL+`/img/emoji0${emotion_number}.png`}></img>
                </span>
            </div>
            <button id="detail_modify_button" onClick={()=>{
                navigate("/Modify", {state:{id:id}})
            }}>수정하기</button>
            <button id="detail_delete_button" onClick={()=>{
                let flag=window.confirm("삭제하시겠습니까?");
                if(flag){
                    let copy=user_data;
                    copy=copy.filter((value)=>{
                        return Object.values(value.id)[0]!=id;
                    })
                    localStorage.setItem("user_data", JSON.stringify(copy));
                    navigate("/");
                }
            }}>삭제하기</button>
        </div>
    )
}

export default Detail