import React from 'react';
import { Button as Btn } from '@material-ui/core';

const Button = ({text, onClick, type, }) => {
    return (
        <div className={"buttonWrapper"}>
            <Btn
                type={type}
                onClick={onClick}
            >
                {text}
            </Btn>
        </div> 
    )
}

export default Button;
