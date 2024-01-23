import React from 'react';
import Taskitem from "./Taskitem";

const Tasklist = (props) => {
    return (
        <div>
            <h1 className='name-title'>My tasks</h1>
            {props.tasks.map(task =>
                <Taskitem task={task} key = {task.id}/>
            )}
        </div>
    );
};

export default Tasklist;