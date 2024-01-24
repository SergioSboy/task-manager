import React from 'react';
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";
import MyCheckbox from "./UI/checkbox/MyCheckbox";



const Taskitem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.tasks.title}</strong>
                <div>
                    {props.tasks.body}
                </div>
            </div>
            <div>
                <MyCheckbox tasks={props.tasks} onChange={props.onChange}/>
            </div>
            <div className="task__btn">
                <div>
                    <MyButton onClick={() => props.remove(props.tasks)}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Taskitem;