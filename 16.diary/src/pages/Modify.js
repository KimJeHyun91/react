import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function Modify(){
    const location=useLocation();
    const id=location.state.id;
    const user_data=JSON.parse(localStorage.getItem("user_data"));
    const data=user_data.filter((value)=>{
        return Object.values(value.id)[0]==id;
    })[0];
    const emotion_number=Object.values(data.emotion)[0];
    const [temp_flag, set_temp_flag]=useState(0);
    const emotion_style={
        nomal:{scale:1}
        , change:{scale:1.5}
    };
    const [title, set_title]=useState(Object.values(data.title)[0]);
    const [content, set_content]=useState(Object.values(data.content)[0]);
    const [emotion, set_emotion]=useState(emotion_number);
    const navigate=useNavigate();

    useEffect(()=>{
        set_temp_flag(emotion_number);
    }, [])

    return(
        <div id="modify">
            <div id="modify_title">제목</div>
            <div id="modify_input_title"><input onChange={(event)=>{set_title(event.target.value)}} placeholder={Object.values(data.title)[0]}></input></div>
            <div id="modify_content">내용</div>
            <div id="modify_input_content"><textarea onChange={(event)=>{set_content(event.target.value)}} placeholder={Object.values(data.content)[0]}></textarea></div>
            <div id="modify_emotion">그날의 감정</div>
            <div id="modify_select_emotion">
                <img className="emoji_img" id="emoji_img_1" style={temp_flag==1?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji001.png'} onClick={()=>{
                    set_emotion(1);
                    set_temp_flag(1);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_2" style={temp_flag==2?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji002.png'} onClick={()=>{
                    set_emotion(2);
                    set_temp_flag(2);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_3" style={temp_flag==3?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji003.png'} onClick={()=>{
                    set_emotion(3);
                    set_temp_flag(3);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_4" style={temp_flag==4?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji004.png'} onClick={()=>{
                    set_emotion(4);
                    set_temp_flag(4);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_5" style={temp_flag==5?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji005.png'} onClick={()=>{
                    set_emotion(5);
                    set_temp_flag(5);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_6" style={temp_flag==6?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji006.png'} onClick={()=>{
                    set_emotion(6);
                    set_temp_flag(6);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_7" style={temp_flag==7?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji007.png'} onClick={()=>{
                    set_emotion(7);
                    set_temp_flag(7);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_8" style={temp_flag==8?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji008.png'} onClick={()=>{
                    set_emotion(8);
                    set_temp_flag(8);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_9" style={temp_flag==9?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji009.png'} onClick={()=>{
                    set_emotion(9);
                    set_temp_flag(9);
                }}></img>&emsp;
                <img className="emoji_img" id="emoji_img_10" style={temp_flag==10?emotion_style.change:emotion_style.nomal} src={process.env.PUBLIC_URL+'/img/emoji010.png'} onClick={()=>{
                    set_emotion(10);
                    set_temp_flag(10);
                }}></img>&emsp;
            </div>
            <button id="modify_modify_button" onClick={()=>{
                if(window.confirm("수정하시겠습니까?")){
                    let copy=user_data;
                    for(let z=0;z<copy.length;z++){
                        if(Object.values(copy[z].id)[0]==id){
                            copy[z].title={title:title};
                            copy[z].content={content:content};
                            copy[z].emotion={emotion:emotion};
                        }
                    }
                    localStorage.setItem("user_data", JSON.stringify(copy));
                    navigate("/");
                }
            }}>이대로 수정하기</button>
        </div>
    )
}

export default Modify