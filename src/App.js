import React, {useState} from "react";
import './styles/app.css';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    // Состояние BI элементов
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Программирование', body: 'Пройти первый и третий урок по JS', active: false},
        {id: 2, title: 'Домашние дела', body: 'Помыть посуду к обеду', active: true},
        {id: 3, title: 'Учеба', body: 'Подготовить конспект по Экономике', active: false},
        {id: 4, title: 'Спорт', body: 'Пробежать 5 километров', active: false},
        {id: 5, title: 'Работа', body: 'Завершить отчет до конца дня', active: false},
        {id: 6, title: 'Путешествие', body: 'Забронировать гостиницу в Париже', active: true},
        {id: 7, title: 'Здоровье', body: 'Посетить зубного врача на контрольный осмотр', active: false},
        {id: 8, title: 'Развлечения', body: 'Сходить в кино на новый фильм', active: false},
        {id: 9, title: 'Финансы', body: 'Проверить банковский счет на наличие новых транзакций', active: false},
        {id: 10, title: 'Семья', body: 'Позвонить родителям и узнать как у них дела', active: false}
    ])
    // Добавление задачи
    const createTask = (newTask) => {
        setTasks([...tasks, newTask])

    }
    // Удаление задачи
    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }


    // Сортировка массива с задачами для пользователя
    const [selectedSort, setSelectedSort] = useState('')
    const sortTasks = (sort) => {
        setSelectedSort(sort)
        setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    // Изменение состояния задачи (Не выполнено(true), выполненно(false))
    const activeTask = ({target: {checked, value}}) => {

        setTasks(tasks => tasks.map(item =>
            item.id === Number(value)
                ? {...item, active: checked}
                : item
        ))


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
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {tasks.length !== 0
                ? <TaskList tasks={tasks} remove={removeTask} onChange={activeTask}/>
                : <h1 style={{textAlign: 'center'}}>
                    Записей нет
                </h1>
            }

        </div>
    );
}

export default App;
