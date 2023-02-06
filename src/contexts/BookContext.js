import React, {createContext,useState} from "react";

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([
        {ad:'Hayvan Çiftliği',id:1},
        {ad:'Satranç',id:2},
        {ad:'Dönüşüm',id:3},
    ])

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider