import React from 'react';
import classes from "./MyCheckbox.module.css";
const MyCheckbox = ({tasks, onChange}) => {
    return (
        <div>
            <label className={classes.customCheckbox}>
                <input
                    type="checkbox"
                    checked={tasks.active}
                    onChange={() => onChange(tasks.id)}
                    id = "modern-checkbox"
                    name="happy"

                />
                <span></span>
            </label>


        </div>

    );
};

export default MyCheckbox;