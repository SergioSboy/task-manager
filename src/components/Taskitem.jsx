import React from 'react';
import MyButton from "./UI/button/MyButton";


const Taskitem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.task.title}</strong>
                <div>
                    {props.task.body}
                </div>
            </div>
            <div>
                <select>
                    <option value="value1">Выполнено</option>
                    <option value="value1">В процессе</option>
                </select>
            </div>
            <div className="task__btn">
                <div>
                    <MyButton onClick={() => props.remove(props.task)}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
);
};

export default Taskitem;