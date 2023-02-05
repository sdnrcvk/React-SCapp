import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar(){
    return (
        <AuthContext.Consumer>{(AuthContext)=>(
            <ThemeContext.Consumer>{(context)=>{

                const {isAuthenticated,toggleAuth}=AuthContext;
                const {isLightTheme,dark,light}=context;
                const theme=isLightTheme ? light:dark;

                return (
                    <nav style={{background:theme.ui,color:theme.syntax}}>
                        <h1>SCapp</h1>
                        <div onClick={toggleAuth}>{isAuthenticated ? "Çıkış Yap":"Giriş Yap" }</div>
                        <ul>
                            <li>Anasayfa</li>
                            <li>Hakkımızda</li>
                            <li>İletişim</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>

        )}
        </AuthContext.Consumer>
    )

}