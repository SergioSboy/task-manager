import React from 'react';
import MyButton from "./UI/button/MyButton";

const Taskitem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.number}. {props.task.title}</strong>
                <div>
                    {props.task.body}
                </div>
            </div>
            <div className="post__btn">
                <div>
                    <MyButton onClick = {() => props.remove(props.task)}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Taskitem;