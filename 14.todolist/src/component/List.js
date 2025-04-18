import { useState } from "react";
import Item from "./Item";
import "./List.css";

function List(props){
    const [search_item, set_search_item]=useState("");
    const [find_item, set_find_item]=useState([]);
    return(
        <div>
            <div id="list">할 일 목록</div>
            <hr></hr>
            {props.list.map((value, index)=>{
                return(
                    <>
                        <Item item={value} list={props.list} set_list={props.set_list} find_item={find_item} set_find_item={set_find_item}></Item>
                    </>
                );
            })}

            <hr></hr>

            <div id="search">
                <input type="text" id="search_item_input" onChange={(event)=>{set_search_item(event.target.value)}}></input> 
                <button type="button" id="search_item_button" onClick={()=>{
                    if(search_item==""){
                        return;
                    }
                    console.log("search_item : "+search_item);
                    if(props.list==""){
                        return;
                    }
                    console.log("props.list : "+props.list);

                    const temp_item_list=props.list.filter((z)=>{
                        return z.item_content.toLowerCase().includes(search_item.toLowerCase());
                    })
                    
                    console.log("temp_item_list : "+temp_item_list);
                    
                    set_find_item(temp_item_list);
                }}>검색</button>
                <hr></hr>
            </div>
            {find_item.map((value, index)=>{
                return(
                    <>
                        <Item item={value} list={props.list} set_list={props.set_list} find_item={find_item} set_find_item={set_find_item}></Item>
                    </>
                );
            })}
            
            <hr></hr>
            
            
        </div>
    )
}



export default List;