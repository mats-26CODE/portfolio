import React from 'react';
import { Button as Btn } from '@material-ui/core';

const Button = ({text, onClick, variant, startIcon}) => {
    return (
        <Btn
            onClick={onClick}
            variant={variant}
            startIcon={startIcon}
        >
            {text}
        </Btn> 
    )
}

export default Button;
