import React, {useState} from "react";
import './styles/app.css';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    // Состояние BI элементов
    const [tasks, setTasks] = useState(
        JSON.parse( localStorage.getItem("todolist")) || []
    )

    // Добавление задачи
    const createTask = (newTask) => {
        const listItem = [...tasks  , newTask]
        setTasks(listItem)
        localStorage.setItem("todolist", JSON.stringify(listItem))
    }
    // Удаление задачи
    const removeTask = (task) => {
        const listItem = tasks.filter(p => p.id !== task.id)
        setTasks(listItem)
        localStorage.setItem("todolist", JSON.stringify(listItem))
    }


    // Сортировка массива с задачами для пользователя
    const [selectedSort, setSelectedSort] = useState('')
    const sortTasks = (sort) => {
        setSelectedSort(sort)
        setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    // Изменение состояния задачи (Не выполнено(true), выполненно(false))
    const activeTask = (id) => {
        const listItem  = (tasks.map(item =>
            item.id === id
                ? {...item, active: !item.active}

                : item
        ))
        setTasks(listItem)
        localStorage.setItem("todolist", JSON.stringify(listItem))


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
                : <h1 style={{textAlign: 'center', color: '#8b3d59'}}>
                    Записей нет
                </h1>
            }

        </div>
    );
}

export default App;
