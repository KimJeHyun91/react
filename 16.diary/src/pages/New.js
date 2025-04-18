import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function New({id, set_id}){
    const navigate = useNavigate();
    const [title, set_title]=useState("");
    const [content, set_content]=useState("");
    const [emotion, set_emotion]=useState(1);
    const [temp_flag, set_temp_flag]=useState(0);
    const emotion_style={
        nomal:{scale:1}
        , change:{scale:1.5}
    };
    
    useEffect(()=>{
        let temp=Math.ceil(Math.random()*10);
        set_emotion(temp);
        set_temp_flag(temp);
    }, [])

    return(
        <div id="new">
            <div id="new_title">제목</div>
            <div id="new_input_title"><input onChange={(event)=>{set_title(event.target.value)}}></input></div>
            <div id="new_content">내용</div>
            <div id="new_input_content"><textarea onChange={(event)=>{set_content(event.target.value)}}></textarea></div>
            <div id="new_emotion">오늘의 감정</div>
            <div id="new_select_emotion">
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
                <button id="new_create_data_button" onClick={()=>{
                    if(window.confirm("작성하시겠습니까?")){
                        set_id(id+1);
                        localStorage.setItem("user_data_id", id);
                        let date=new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
                        
                        let user_data={
                            id:{id}
                            , title:{title}
                            , content:{content}
                            , create_date:{date}
                            , emotion:{emotion}
                        }
                        
                        let temp=JSON.parse(localStorage.getItem("user_data"));
                        temp.push(user_data);
                        localStorage.setItem("user_data", JSON.stringify(temp));
                        navigate("/");
                    }
                }}>이대로 작성하기</button>
            </div>
        </div>
    )
}

export default New