import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class Navbar extends Component {

  render() {

    return(
        <ThemeContext.Consumer>
            {(context)=>{

            const {isLightTheme,dark,light}=context;
            const theme=isLightTheme ? light:dark;

            return (
                <nav style={{background:theme.ui,color:theme.syntax}}>
                    <h1>SCapp</h1>
                    <ul>
                        <li>Anasayfa</li>
                        <li>Hakkımızda</li>
                        <li>İletişim</li>
                    </ul>
                </nav>
            )
            }}
        </ThemeContext.Consumer>
    )

  }
}

export default Navbar