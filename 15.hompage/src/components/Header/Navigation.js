import { useNavigate } from "react-router-dom";

function Navigation(){
    const navi=useNavigate();

    return(
        <div id="navigation">
            <div>
                봄&emsp;
                여름&emsp;
                가을&emsp;
                겨울&emsp;
                잡화&emsp;
                ㅣ&emsp; 
                베스트&emsp;
                이벤트&emsp;
                ㅣ&emsp; 
                <a style={{cursor:"pointer"}} onClick={()=>{
                    navi("/cart")
                }}>장바구니</a>&emsp;
            </div>
        </div>
    );
}

export default Navigation;