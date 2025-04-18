import './Button.css';

function Button(props){
    return(
        <>
            <button type="button" className="test_button" style={{backgroundColor:props.button_props.color}}>클릭</button>
        </>
    )
}

export default Button;