import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.Btn}>{children}</button>
        </div>
    );
};

export default Button;