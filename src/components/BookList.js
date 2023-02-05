import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const BookList=()=> {

    const {isLightTheme,dark,light}=useContext(ThemeContext);
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

export default BookList;
