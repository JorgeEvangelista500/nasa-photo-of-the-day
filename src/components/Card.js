import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import styled from "styled-components";

const StyledCard = styled.div`
    
    border: 4px lightblue;
    background-color:lightblue;

`
const Card = ({imgData})=> {
    const {title, copyright, date, url, explanation} = imgData
console.log(url)
    return (
        <StyledCard>  
            <Header title={title}  />
            <Content url={url} explanation={explanation} />
            <Footer copyright={copyright} date={date} />         
        </StyledCard>
    )
}

export default Card