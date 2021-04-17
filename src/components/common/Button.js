import React from 'react';
import { Button as Btn } from '@material-ui/core';

const Button = ({text, onClick, variant, startIcon, href}) => {
    return (
        <Btn
            onClick={onClick}
            variant={variant}
            startIcon={startIcon}
        >
            <a href={href}>{text}</a>
        </Btn> 
    )
};

export default Button;
