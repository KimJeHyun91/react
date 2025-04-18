import Navigation from "./Navigation";
import Logo from "./Logo";

function Header(){
    
    return(
        <div id="header">
            <div id="header_logo_navigation">
                <Logo></Logo>
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default Header;