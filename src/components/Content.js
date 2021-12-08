import React from "react";

const Content = ({url, explanation}) => {

    return (
        <div>  
            <img src={url}  alt="of the day" />
            <p>{explanation}</p>         
        </div>
    )
}

export default Content