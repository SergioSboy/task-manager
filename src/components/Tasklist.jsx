import React from 'react';
import Taskitem from "./Taskitem";

const Tasklist = ({tasks, title, remove}) => {
    return (
        <div>
            <h1 className='name-title'>My tasks</h1>
            {tasks.map((task, index) =>
                <Taskitem remove = {remove} number = {index + 1} task={task} key = {task.id}/>
            )}
        </div>
    );
};

export default Tasklist;