import { Link } from "react-router-dom"

function Navigation({list_flag, set_list_flag}){

    return(
        <div id='home_navigation'>
            <Link id='home_navigation_1' to={'/'} onClick={()=>{
                set_list_flag(!list_flag);
            }}>홈</Link>
            <Link id='home_navigation_2' to={'/New'}>새로 작성하기</Link>
        </div>
    )
}

export default Navigation