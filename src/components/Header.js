import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
    color: #1e90ff;
   

`
const Header = ({title}) => {

    return <StyledHeader>{title}</StyledHeader>
}

export default Header