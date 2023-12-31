import React from "react";
import { Children } from "react";

const Button = ({onClick}) => {
    return (  
        <button onClick={onClick}>
            Click me
        </button>
    );
}
 
export default Button;