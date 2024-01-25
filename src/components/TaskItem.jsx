import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyCheckbox from "./UI/checkbox/MyCheckbox";



const TaskItem = (props) => {
    return (
        <div className="task">
            <div>
                <div className="task__content">
                    <strong>{props.tasks.title}</strong>
                    <div>
                        {props.tasks.body}
                    </div>
                </div>


            </div>
            <div className="task__btn">
                <div>
                    <MyButton onClick={() => props.remove(props.tasks)}>
                        Delete
                    </MyButton>
                </div>
            </div>
            <div className="task__checkbox">
                <div>
                    <MyCheckbox tasks={props.tasks} onChange={props.onChange}/>
                </div>
            </div>

        </div>

    );
};

export default TaskItem;