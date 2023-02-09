import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type PropsFilterType = 'all' | 'active' | 'completed'
function App() {


   let [tasks1,setTasks1] = useState( [
       { id: v1(), title: "HTML&CSS", isDone: true },
       { id: v1(), title: "JS", isDone: true },
       { id: v1(), title: "ReactJS", isDone: false },
       { id: v1(), title: "Rest Api", isDone: false },
       { id: v1(), title: "GraphQl", isDone: false }


   ])
const deleteTask =(id:string) => {
       let deleteTask = tasks1.filter((t) => t.id !== id)
    setTasks1(deleteTask)
}

const [filter,setFilter] = useState<PropsFilterType>('all')

    const filterClick = (value:PropsFilterType) => {
        setFilter(value)
    }
    let copyTaskFilter = tasks1
    if(filter === 'active') {
     copyTaskFilter = tasks1.filter((t) => t.isDone === false )
}
    if(filter === 'completed') {
        copyTaskFilter = tasks1.filter((t) => t.isDone === true )
    }

    const addTask = (title:string) => {
        let task = {id: v1(), title: title, isDone: false}
        let addTask = [task,...tasks1]
        setTasks1(addTask)
    }
    return (
        <div className="App">
            <Todolist title='What to learn' tasks={copyTaskFilter}
                      deleteTask={deleteTask} filterClick={filterClick}
                      addTask={addTask}
            />
        </div>
    );
}


export default App;
