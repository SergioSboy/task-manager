import React from 'react';

const MyCheckbox = ({tasks, onChange}) => {
    return (
        <div>
            <input type="checkbox" checked={tasks.active} onChange={onChange} value={tasks.id}/>

        </div>

    );
};

export default MyCheckbox;