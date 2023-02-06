import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar=()=>{

    const {isAuthenticated,toggleAuth}=useContext(AuthContext);
    const {isLightTheme,dark,light}=useContext(ThemeContext);
    const theme=isLightTheme ? light:dark;

    return (
        <nav style={{background:theme.ui,color:theme.syntax}}>
            <h1>SCapp</h1>
            <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
                <button type="button" onClick={toggleAuth} style={{
                    background:theme.bg,
                    color:theme.syntax,
                    border:0,
                    width:"80px",
                    height:"30px",
                    borderRadius:"10px",
                }}>
                {isAuthenticated ? "Çıkış Yap":"Giriş Yap" }
                </button>
            </ul>
        </nav>
    )

}

export default Navbar