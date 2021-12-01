import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div>
            <input className={classes.Input} {...props}/>
        </div>
    );
};

export default Input;