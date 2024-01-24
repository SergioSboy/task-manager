import React, {useRef, useState} from "react";
import './styles/app.css';
import Taskitem from "./components/Taskitem";
import Tasklist from "./components/Tasklist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import TaskForm from "./components/TaskForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Программирование', body: 'Пройти первый и третий урок по JS'},
        {id: 2, title: 'Домашние дела', body: 'Помыть посуду к обеду'},
        {id: 3, title: 'Учеба', body: 'Подготовить конспект по Экономике'},
        {id: 4, title: 'Спорт', body: 'Пробежать 5 километров'},
        {id: 5, title: 'Работа', body: 'Завершить отчет до конца дня'},
        {id: 6, title: 'Путешествие', body: 'Забронировать гостиницу в Париже'},
        {id: 7, title: 'Здоровье', body: 'Посетить зубного врача на контрольный осмотр'},
        {id: 8, title: 'Развлечения', body: 'Сходить в кино на новый фильм'},
        {id: 9, title: 'Финансы', body: 'Проверить банковский счет на наличие новых транзакций'},
        {id: 10, title: 'Семья', body: 'Позвонить родителям и узнать как у них дела'}
    ])
    // Добавление задачи
    const [selectedSort, setSelectedSort] = useState('')
    const createTask = (newTask) => {
        setTasks([...tasks, newTask])

    }
    // Удаление задачи
    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }
    // Сортировка массива с задачами для пользователя
    const sortTasks = (sort) => {
        setSelectedSort(sort)
        setTasks([...tasks].sort((a,b) => a[sort].localeCompare(b[sort])))
    }
    return (
        <div className="App">
            <TaskForm create={createTask}/>
            <hr style={{margin: "15px 0", color: "blue"}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortTasks}
                    defaultValue="Сортировка"
                    options={[
                        {value:'title', name: 'По названию'},
                        {value:'body', name:'По описанию'}
                    ]}
                />
            </div>
            {tasks.length !== 0
                ? <Tasklist tasks={tasks} remove={removeTask}/>
                : <h1 style={{textAlign: 'center'}}>
                    Записей нет
                </h1>
            }

        </div>
    );
}

export default App;
