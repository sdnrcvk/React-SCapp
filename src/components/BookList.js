import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Booklist extends Component {
    static contextType=ThemeContext;

  render() {

    const {isLightTheme,dark,light}=this.context;
    const theme=isLightTheme ? light:dark;
    return (
      <div className='book-list' style={{background:theme.bg,color:theme.syntax}}>
        <ul>
            <li style={{background:theme.ui}}>Hayvan Çiftliği</li>
            <li style={{background:theme.ui}}>Satranç</li>
            <li style={{background:theme.ui}}>Dönüşüm</li>
        </ul>
      </div>
    )
  }
}
