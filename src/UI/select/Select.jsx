import React from 'react';
import classes from './Select.module.css'

const Select = ({defaultValue, options, value, onChange}) => {
    return (
        <>
            <select
                className={classes.Select__styles}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value="default">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.name} value={option.value}>{option.name}</option>
                )}
            </select>
        </>
    );
};

export default Select;