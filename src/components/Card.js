import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";


const Card = ({imgData})=> {
    const {title, copyright, date, url, explanation} = imgData
console.log(url)
    return (
        <div>  
            <Header title={title}  />
            <Content url={url} explanation={explanation} />
            <Footer copyright={copyright} date={date} />         
        </div>
    )
}

export default Card