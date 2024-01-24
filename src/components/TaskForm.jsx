import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now(), active: false
        }
        create(newTask)
        setTask({title:'', body:''})
    }
    return (
        <form>
            <MyInput
                value = {task.title}
                onChange = {e => setTask({...task, title: e.target.value})}
                type="text"
                placeholder="Заголовок задачи"
            />
            <MyInput
                value = {task.body}
                onChange = {e => setTask({...task, body: e.target.value})}
                type="text"
                placeholder="Описание задачи"
            />
            <MyButton onClick = {addNewPost}>Добавить задачу</MyButton>
        </form>
    );
};

export default TaskForm;