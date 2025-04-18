import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function List({month, year, list_flag}){
    const [use_effect_flag, set_use_effect_flag]=useState(false);
    const [list_year, set_list_year]=useState(year);
    const [list_month, set_list_month]=useState(month);
    const [page_display_number, set_page_display_number]=useState(15);
    const [page_number, set_page_number]=useState(0);
    const [total_page, set_total_page]=useState(0);
    const [total_page_list, set_total_page_list]=useState([]);
    const [final_filtered_list, set_final_filtered_list]=useState([]);
    const [year_select_list, set_year_select_list]=useState([]);
    const [month_select_list, set_month_select_list]=useState([]);
    const navigate=useNavigate(); 
    
    useEffect(()=>{
        set_list_month(month);
        set_list_year(year);
    }, [list_flag])
    
    let list=JSON.parse(localStorage.getItem("user_data"));
    let filtered_list=[];
    let final_list=[];

    if(list_month==0){
        set_list_month(12);
        set_list_year(list_year-1);
    }
    if(list_month==13){
        set_list_month(1);
        set_list_year(list_year+1);
    }
    useEffect(()=>{
        if(list!=null){
            list.sort((a, b)=>{
                return Object.values(b.id)-Object.values(a.id);
            })

            filtered_list=list.filter((value)=>{
                let temp=Object.values(value.create_date);
                let temp2=temp[0];
                let temp_year=temp2.substring(0, 4);
                let temp_month=temp2.substring(5, 6);
                return temp_year==list_year&&temp_month==list_month;
            })

            set_total_page(Math.ceil(filtered_list.length/page_display_number));

            let start_number=page_number*15;

            let end_number=(page_number*15)+15;

            for(let z=start_number;z<end_number;z++){
                if(filtered_list[z]==null){
                    break;
                }
                final_list.push(filtered_list[z])
            }

            set_final_filtered_list(final_list);
        }
    }, [list_year, list_month, page_number, use_effect_flag])

    useEffect(()=>{
        let temp_list=[];
            for(let z=0;z<total_page;z++){
                temp_list.push(z+1);
            }
            set_total_page_list(temp_list);
    }, [total_page])

    
    useEffect(()=>{
        let year_list=[];
        let month_list=[];
        
        for(let z=2000;z<=year;z++){
            year_list.push(z);
        }
        for(let z=1;z<=12;z++){
            month_list.push(z);
        }
        set_year_select_list(year_list);
        set_month_select_list(month_list);
    }, [])

    return(
        <div id="list">
            <div id="list_select_month_year">
                <button className="list_button" style={{cursor:"pointer"}} onClick={()=>{set_list_month(list_month-1); set_page_number(0);}}>이전달</button>
                <span style={{cursor:"pointer"}}>
                    <select id="list_year_selector" onChange={(event)=>{
                        set_list_year(event.target.value);
                    }}>
                        {year_select_list.map((value, index)=>{
                            return(
                                <>
                                    {value==list_year?<option selected value={value}>{value}</option>:<option value={value}>{value}</option>}
                                </>
                            )
                        })}
                    </select>년 
                    <select id="list_month_selector" onChange={(event)=>{
                        set_list_month(event.target.value);
                    }}>
                        {month_select_list.map((value, index)=>{
                            return(
                                <>
                                    {value==list_month?<option selected value={value}>{value}</option>:<option value={value}>{value}</option>}
                                </>
                            )
                        })}
                    </select>월
                </span>               
                <button className="list_button" style={{cursor:"pointer"}} onClick={()=>{set_list_month(list_month+1); set_page_number(0);}}>다음달</button>
            </div>
            <table id="list_table">
                <thead>
                    <tr>
                        <th style={{width:"5%", border:"1px solid", backgroundColor:"black", color:"white"}}>번호</th>
                        <th style={{width:"10%", border:"1px solid", backgroundColor:"black", color:"white"}}>제목</th>
                        <th style={{width:"10%", border:"1px solid", backgroundColor:"black", color:"white"}}>작성일</th>
                        <th style={{width:"5%", border:"1px solid", backgroundColor:"black", color:"white"}}>감정</th>
                        <th style={{width:"3%", border:"1px solid", backgroundColor:"black", color:"white"}}>수정</th>
                        <th style={{width:"3%", border:"1px solid", backgroundColor:"black", color:"white"}}>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {final_filtered_list.map((value, index)=>{
                        let id=Object.values(value.id);
                        return(
                            <tr key={index}>
                                <td>{Object.values(value.id)}</td>
                                <td className="list_title" onClick={()=>{
                                    navigate("/Detail", {state:{id:id}});
                                }}>{Object.values(value.title)}</td>
                                <td>{Object.values(value.create_date)}</td>
                                <td>
                                    <img src={
                                        Object.values(value.emotion)<10?process.env.PUBLIC_URL+`/img/emoji00${Object.values(value.emotion)}.png`:process.env.PUBLIC_URL+`/img/emoji0${Object.values(value.emotion)}.png`
                                    } style={{width:"20px"}}></img>
                                </td>
                                <td><button style={{backgroundColor:"white", borderRadius:"10px", cursor:"pointer"}} onClick={()=>{
                                    navigate("/modify", {state:{id:id}});
                                }}>수정</button></td>
                                <td><button style={{backgroundColor:"white", borderRadius:"10px", cursor:"pointer"}} onClick={()=>{
                                    let flag=window.confirm("삭제하시겠습니까?");
                                    if(flag){
                                        let copy=list;
                                        copy=copy.filter((value)=>{
                                            return Object.values(value.id)[0]!=id;
                                        })
                                        localStorage.setItem("user_data", JSON.stringify(copy));
                                        set_use_effect_flag(!use_effect_flag);
                                    }
                                }}>삭제</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            {total_page_list.map((value)=>{
                                return(
                                    <span key={value} style={{cursor:"pointer", margin:"5px"}} onClick={()=>{set_page_number(value-1)}}>
                                        [{value}]
                                    </span>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default List