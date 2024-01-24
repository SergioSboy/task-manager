import React from 'react';
import classes from './MySelect.module.css'
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={classes.select}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option className={classes.select__head} disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option className={classes.select__item} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;