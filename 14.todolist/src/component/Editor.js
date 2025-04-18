import "./Editor.css";
import { useState, useRef } from "react";

function Editor(props){
    const [content, set_content]=useState("");
    const content_ref=useRef();
 
    return(
        <div>
            <input id="add_item_input" ref={content_ref} onChange={(event)=>{set_content(event.target.value)}}></input>&ensp;
            <button id="add_item_button" onClick={()=>{
                if(content==""){
                    content_ref.current.focus();
                    return;
                }
                props.create_item(content);
            }}>할 일 추가</button>
        </div>
    )
}

export default Editor;