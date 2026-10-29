import './task.css';
import { useState } from 'react';
function TaskCard(props) {
     const[TitleTaskform,setTitleTaskForm]=useState('');
    let getTitleTaskform=(e)=>{
        setTitleTaskForm(e.target.value)
    }
    const[PriorityTaskform,setPriorityTaskForm]=useState('');
    let getPriorityTaskform = (e)=>{
        setPriorityTaskForm(e.target.value)
    }
    let EditTask = (id,TasksArray) => {
        let findtask = TasksArray.find((e) => { return e.id === id })
        console.log(findtask);
        setTitleTaskForm(findtask.title);
        setPriorityTaskForm(findtask.priority);
    }
    let saveNewTitle = (id,TasksArray)=>{ 
        let arraySeter= props.seter;
        if (id !== null) {
            arraySeter(TasksArray.map((e)=>(
                id === e.id?{...e,title:TitleTaskform,priority:PriorityTaskform}:e
            )))
            console.log(TasksArray);
            
        }
    }
    return (
        <>
            <div className='taskCard'>
                <div className='taskCardDiv1'>
                    <input checked={props.state} onChange={(e) => props.getCheckbOX(e, props.id)} type="checkbox" />
                    <div>
                        <p>{props.task}</p>
                        <div className='cardPriorityDIV'>
                            <p>{props.priority}</p>
                            <p>{props.state ? 'completed' : 'pending'}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={()=>saveNewTitle(props.id,props.NewTasksArray)}>save</button>
                    <button onClick={()=>EditTask(props.id,props.NewTasksArray)}>Edit</button>
                    <button onClick={()=>{props.deletTask(props.id)}}>Delete</button>
                </div>
            <div className='TASKform'>
                <label htmlFor="">
                    <label htmlFor="">Task title</label>
                    <input onChange={getTitleTaskform} value={TitleTaskform} type="text" placeholder='e.g. Practice React hooks' name="" id="" />
                </label>
                <label htmlFor="">
                    <label htmlFor="">
                        <label htmlFor="">Priority</label>
                        <select onChange={getPriorityTaskform} value={PriorityTaskform} name="" id="">
                            <option value="">choose proirity</option>
                            <option> high priority</option>
                            <option>medium priority</option>
                            <option>low priority</option>
                        </select>
                    </label>
                </label>
            </div>
            </div>
        </>
    )
}
export default TaskCard;