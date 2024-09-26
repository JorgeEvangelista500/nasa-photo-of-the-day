import React from "react";
import styled from "styled-components";

const StyledContent = styled.div` 
    display:flex;
    flex-direction: column;
    justify-content: center;

    p { 
        margin-left: 19%;
        max-width:60%;
        padding: 8px;
        border:5px solid #1e90ff;
    }
    img{
        margin-left: 19%;
        max-width:60%;

        &:hover {
            transform: scale(1.2)
        }
    }

`
const Content = ({url, explanation}) => {

    return (
        <StyledContent>  
            <img src={url}  alt="of the day" />
            <p>{explanation}</p>         
        </StyledContent>
    )
}

export default Content