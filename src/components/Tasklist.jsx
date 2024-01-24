import React from 'react';
import Taskitem from "./Taskitem";

const Tasklist = ({tasks, remove, value, onChange}) => {
    return (
        <div>
            <h1 className='name-title'>My tasks</h1>
            {tasks.map((task, index) =>
                <Taskitem remove={remove} number={index + 1} tasks={task} key={task.id} value={value}
                          onChange={onChange}/>
            )}
        </div>
    );
};

export default Tasklist;