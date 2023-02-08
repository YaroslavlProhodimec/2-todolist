import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
export type PropsFilterType = 'all' |  'completed' | 'active'
function App() {


   let [tasks1,setTasks1]= useState( [
       { id: 1, title: "HTML&CSS", isDone: true },
       { id: 2, title: "JS", isDone: true },
       { id: 3, title: "ReactJS", isDone: false }
   ])
let [filter,setFilter] = useState<PropsFilterType>('all')
    const removeTask = (id:number) => {
        let partDelected = tasks1.filter(t => t.id !== id)
        setTasks1(partDelected)
    }

    const changeFilter = (value:PropsFilterType) =>{
      return  setFilter(value)
    }
    let taskForToDoList = tasks1
    if(filter === 'completed'){
        taskForToDoList = tasks1.filter(t => t.isDone === true)
    }
    if(filter === 'active'){
        taskForToDoList = tasks1.filter(t => t.isDone === false)
    }


    return (
        <div className="App">
            <Todolist title='What to learn' tasks={taskForToDoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}


export default App;
