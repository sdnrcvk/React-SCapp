import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class Navbar extends Component {
    static contextType=ThemeContext;

  render() {

    const {isLightTheme,dark,light}=this.context;
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
  }
}

export default Navbar