import React from 'react';

const Taskitem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.task.id}. {props.task.title}</strong>
                <div>
                    {props.task.body}
                </div>
            </div>
            <div className="post__btn">
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Taskitem;