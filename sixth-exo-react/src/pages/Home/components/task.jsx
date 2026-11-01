import './task.css';
import { useState } from 'react';
function TaskCard(props) {
    const [TitleTaskform, setTitleTaskForm] = useState('');
    let getTitleTaskform = (e) => {
        setTitleTaskForm(e.target.value)
    }
    const [PriorityTaskform, setPriorityTaskForm] = useState('');
    let getPriorityTaskform = (e) => {
        setPriorityTaskForm(e.target.value)
    }
    const[isClicked,setIsClicked] = useState(false)
    let EditTask = (id, TasksArray) => {
        let findtask = TasksArray.find((e) => { return e.id === id })
        console.log(findtask);
        setTitleTaskForm(findtask.title);
        setPriorityTaskForm(findtask.priority);
        setIsClicked(true)
    }
    let saveNewTitle = (id, TasksArray) => {
        let arraySeter = props.seter;
        if (id !== null) {
            arraySeter(TasksArray.map((e) => (
                id === e.id ? { ...e, title: TitleTaskform, priority: PriorityTaskform } : e
            )))
            console.log(TasksArray);
            setIsClicked(false)
        }
    }
    let cancelChange=()=>{
        setIsClicked(false)
    }
    // !!!!! changing classenames:
    return (
        <>
            <div className='taskCard'>
                <div className='taskCardDiv1'>
                    <div>

                    <input className='CHeckBox' checked={props.state} onChange={(e) => props.getCheckbOX(e, props.id)} type="checkbox" />
                    </div>
                    <div style={{width:'100%'}}>
                        <p className='TAskpara1'>{props.task}</p>
                        <div className='cardPriorityDIV'>
                            <p className={props.priority ==='high priority'?'Prioriyty':
                                props.priority === 'medium priority'?'Prioriyty2':
                                props.priority==='low priority'?'Prioriyty3':''}>{props.priority}</p>
                            <p className='STatu'>{props.state ? 'completed' : 'pending'}</p>
                        </div>
                    </div>
                </div>
                <div className='EDITdeletBTNSDiv'>
                    <button className='EDITdeletBTNS2' onClick={() => EditTask(props.id, props.NewTasksArray)}>Edit</button>
                    <button className='EDITdeletBTNS' onClick={() => { props.deletTask(props.id) }}>Delete</button>
                </div>
                <div className={isClicked?'TASKform2':'TASKform'}>
                    <label className='TASKformInput1' htmlFor="">
                        <input className='TASKformInput11' onChange={getTitleTaskform} value={TitleTaskform} type="text" placeholder='e.g. Practice React hooks' name="" id="" />
                    </label>

                    <label htmlFor="" className='TASKformInput2'>
                        <select className='TASKformInput12' onChange={getPriorityTaskform} value={PriorityTaskform} name="" id="">
                            <option value="">choose proirity</option>
                            <option> high priority</option>
                            <option>medium priority</option>
                            <option>low priority</option>
                        </select>
                        <button className='taskFormBTN2' onClick={() => saveNewTitle(props.id, props.NewTasksArray)}>save</button>
                        <button className='taskFormBTN' onClick={cancelChange}>cancel</button>
                    </label>

                </div>
            </div>
        </>
    )
}
export default TaskCard;