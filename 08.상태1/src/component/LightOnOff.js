import {useState} from 'react';

function LightOnOff(){
    const [light_flag, set_light_flag]=useState(false);
    return(
        <div>
            <button onClick={()=>{set_light_flag(!light_flag)}}>LightOn/Off</button>
            {light_flag?<div style={{width:"100px", height:"100px", backgroundColor:`yellow`, borderRadius:"50%"}}></div>:<div style={{width:"100px", height:"100px", backgroundColor:`white`, borderRadius:"50%"}}></div>}
        </div>
    );
}

export default LightOnOff;