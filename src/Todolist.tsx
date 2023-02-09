import {PropsFilterType} from "./App";
import {useState, KeyboardEvent, ChangeEvent, MouseEvent, MouseEventHandler} from "react";


type PropsTodolist = {
    title: string
    tasks: Array<TasksType>
    deleteTask:(id:string)=>void
    filterClick:(value:PropsFilterType)=>void
    addTask:(title:string)=>void
}
export type TasksType = {
    id: string,
    title: string,
    isDone: boolean

}

export function Todolist(props: PropsTodolist) {

    const [title,setTitle] = useState('')

   const filterAll= () => {props.filterClick("all")}
    const filterCompleted= () => {props.filterClick("completed")}
    const filterActive= () => {props.filterClick("active")}
   const  onKeyPressPush = (e:KeyboardEvent<HTMLInputElement>) =>  {
       if(e.ctrlKey || e.charCode === 13){
           props.addTask(title)
           setTitle('')
       }
   }
   const onClickOn = (e:MouseEvent<HTMLButtonElement>) => {
        props.addTask(title)
        setTitle('')}
   const onChangeCreate = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onKeyPress={onKeyPressPush} value={title} onChange={onChangeCreate} />

                <button onClick={onClickOn}>+</button>
            </div>
            <ul>
                {props.tasks.map((t: any) => {
                    const onClickChange = () => {
                        props.deleteTask(t.id)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickChange}>x
                        </button>
                    </li>})}

            </ul>
            <div>
                <button onClick={filterAll}>All
                </button>
                <button onClick={filterActive}>Active
                </button>
                <button onClick={filterCompleted}>Completed
                </button>
            </div>
        </div>

    )
}