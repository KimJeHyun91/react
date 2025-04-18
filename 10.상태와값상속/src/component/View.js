import { useState } from "react";
import Controller from "./Controller";

function View({count}){
    return(
        <>
            <h1>현재 카운트</h1>
            <h2>{count}</h2>
        </>
    );
}

export default View;