import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle=()=>{

    const {toggleTheme}=useContext(ThemeContext);

    return(
        <button onClick={toggleTheme} style={{
            border:0,
            width:"120px",
            height:"30px",
            borderRadius:"20px",
            backgroundColor:"orange"
        }}>Tema Değiştir</button>
    )

}

export default ThemeToggle;