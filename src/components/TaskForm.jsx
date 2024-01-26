import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const TaskForm = ({create}) => {

    // Управление состоянием формы

    const [task, setTask] = useState({title:'', body:''})
    const [title, setTaskTitle] = useState('')
    const [body, setTaskBody] = useState('')
    const [titleDirty, setTitleDirty] = useState(false)
    const [bodyDirty, setBodyDirty] = useState(false)
    const [titleError, setTitleError] = useState('Заголовок не может быть пустым')
    const [bodyError, setBodyError] = useState('Описание не может быть пустым')

    const [formValid, setFormValid] = useState(false)
    const titleHandler = (e) => {
        setTaskTitle(e.target.value)
        if (e.target.value.length === 0){
            setTitleError('Некорректный ввод')
        } else {
            setTaskTitle(e.target.value)
            setTitleError('')
        }
    }

    const bodyHandler = (e) => {
        setTaskBody(e.target.value)
        if (e.target.value.length === 0){
            setBodyError('Некорректный ввод')
        } else {
            setTaskBody(e.target.value)
            setBodyError('')
        }
    }
    const blurError = (e) => {
        switch (e.target.name) {
            case 'title':
                setTitleDirty(true)
                break
            case 'body':
                setBodyDirty(true)
                break
            default:
                break
        }
    }
    const addNewPost = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now(), active: false, title:title, body:body
        }
        create(newTask)

        // Обнуляем инпут
        setTask({title:'', body:''})
    }

    // Проверка корректности формы и взаимодействие с кнопкой

    useEffect(() => {
        if(titleError || bodyError) {
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [titleError, bodyError]);

    return (
        <form>

            <MyInput
                onChange = {e => titleHandler(e)}
                onBlur = {e => blurError(e)}
                name = 'title'
                value = {title}
                type="text"
                placeholder="Заголовок задачи"
            />
            {(titleDirty && titleError) && <div style={{color:'red'}}>{titleError}</div>}

            <MyInput
                onChange = {e => bodyHandler(e)}
                onBlur = {e => blurError(e)}
                name = 'body'
                value = {body}
                type="text"
                placeholder="Описание задачи"
            />
            {(bodyDirty && bodyError) && <div style={{color:'red'}}>{bodyError}</div>}
            <MyButton disabled = {!formValid} onClick = {addNewPost}>Добавить задачу</MyButton>
        </form>
    );
};

export default TaskForm;