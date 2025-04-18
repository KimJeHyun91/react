import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Header.css';

function Header(){
    return(
        <> 
            <div id="header">
                <div id="logo">
                    로고
                </div>
                <div id="serch">
                    <Form.Control type="text" placeholder="검색"/>
                </div>
                <div id="login">
                    
                </div>
                <div id="navigation"></div>
            </div>
            
        </>
    )
}

export default Header;