import { useRef } from "react";
import "./Item.css";

function Item({item, list, set_list, find_item, set_find_item}){
    const checkbox_ref=useRef();
    return(
        <div id="item">
            <input type="checkbox" value="done" id="item_checkbox"onChange={
                (event)=>{
                    if(event.target.value==""||event.target.value==null){
                        return;
                    }else{
                        console.log("item : "+event.target.value);

                        const temp_list=list.map((value, index)=>{
                                console.log(value.item_id);
                                console.log(item.item_id);
                                if(value.item_id==item.item_id){
                                    value.item_done=!value.item_done;
                                }
                                console.log(value.item_done);
                                return value;
                        });
                        
                        console.log(temp_list);

                        set_list(temp_list);
                        
                    }
                }
            }></input> &ensp; 
            {item.item_content} &ensp;
            {item.item_year}-{item.item_month}-{item.item_day} {item.item_hours}:{item.item_minutes}:{item.item_seconds}  &ensp; 
            <button type="button" id="item_delete_button" onClick={()=>{
                let copy=[...list];
                copy=copy.filter((z)=>{
                    return z.item_id!=item.item_id;
                })
                set_list(copy);

                let temp_copy=find_item;
                temp_copy=temp_copy.filter((z)=>{
                    return z.item_id!=item.item_id;
                })
                set_find_item(temp_copy);
                
                
                
            }}>삭제</button>
            <hr></hr>
        </div>
    )
}

export default Item;