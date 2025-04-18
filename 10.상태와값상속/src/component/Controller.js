function Controller({on_click_button}){
    return(
        <>
            <button type="button" onClick={()=>{on_click_button(-100)}}>-100</button>
            <button type="button" onClick={()=>{on_click_button(-10)}}>-10</button>
            <button type="button" onClick={()=>{on_click_button(-1)}}>-1</button>
            <button type="button" onClick={()=>{on_click_button(+1)}}>+1</button>
            <button type="button" onClick={()=>{on_click_button(+10)}}>+10</button>
            <button type="button" onClick={()=>{on_click_button(+100)}}>+100</button>
        </>
    )
}

export default Controller;