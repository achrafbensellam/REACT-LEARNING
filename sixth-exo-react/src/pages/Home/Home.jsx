import TaskCard from './components/task';
import './home.css';
import { useEffect, useState } from 'react';
function HomePage() {
    let TasksArray = []
    const [addTask, SetTaskTitle] = useState('');
    let getTaskTitle = (e) => {
        SetTaskTitle(e.target.value);

        console.log(addTask);
    }
    const [addPriority, setPriority] = useState('');
    let getPriority = (e) => {
        setPriority(e.target.value)
        console.log(addPriority);

    }
    const [AddCheckbox, setCheckbox] = useState('')

    let getCheckbOX = (ele, index) => {
        setCheckbox(ele.target.checked)
        console.log(AddCheckbox);
        setNewTasksArray((prev) => prev.map((e) => (
            e.id === index ? { ...e, isComplited: ele.target.checked } : e
        )))
    }

    const [NewTasksArray, setNewTasksArray] = useState(TasksArray);
    const [taskCounter, setTaskCounter] = useState(0);
    // const [edit, setEdit] = useState(null);
    let AddNewTaskToArray = (e, id) => {
        e.preventDefault();
        if (addTask === '') {
            return
        } else if (addPriority === '') {
            return
        } else {
            // if (edit !== null) {

            // }
            setNewTasksArray([...NewTasksArray, { id: crypto.randomUUID(), title: addTask, priority: addPriority, isComplited: false }])
            SetTaskTitle('');
            setPriority('');
            setTaskCounter(taskCounter + 1);

            console.log(NewTasksArray);
        }
    }
    const completedTasks = NewTasksArray.filter((e) => {
        return e.isComplited === true
    })
    const pendingTasks = NewTasksArray.length - completedTasks.length
    const [Filter, setFilter] = useState('all');
    let filtringArray = NewTasksArray.filter((e) => {
        if (Filter === 'complited') {
            return e.isComplited === true
        }
        if (Filter === 'pending') {
            return e.isComplited === false
        }
        if (Filter === 'all') {
            return e
        }
    })
    let all = () => {
        setFilter('all')
    }
    let completed = () => {
        setFilter('complited')
    }
    let pending = () => {
        setFilter('pending')
    }
    let deletTask = (id) => {
        setNewTasksArray(NewTasksArray.filter((e) => {
            return e.id !== id
        }))
    }
    // ! use effect:
    const [SecondsTimer, setSecondsTimer] = useState(0);
    const [statutimer, setStatuTimer] = useState(false);
    useEffect(() => {
        // let timer
        if (!statutimer) {
            return
        }
          let  timer = setInterval(() => {
                setSecondsTimer((prev)=>prev + 1)
            }, 1000);

    
    return () => {
        clearInterval(timer)
    }

    }, [statutimer])

    let risetTimer = () => {
        setStatuTimer(false);
        setSecondsTimer(0)
    }
    let stopTimer = () => {
        setStatuTimer(false)
    }
    let startTimer = () => {
        setStatuTimer(true)
    }
    return (
        <>

            <section className='Section1'>
                <p className='Section1Para1'>REACT PRACTICE PROJECT</p>
                <p>My Study Planner</p>
                <p>Manage your learning tasks, keep them after refresh, and track a study session.</p>
                <div className='Section1Counters'>
                    <div className='counter1'>
                        <p>Total tasks</p>
                        <p>{taskCounter}</p>
                    </div>
                    <div className='counter1'>
                        <p>Completed</p>
                        <p>{completedTasks.length}</p>
                    </div>
                    <div className='counter1'>
                        <p>Pending</p>
                        <p>{pendingTasks}</p>
                    </div>
                </div>
            </section>
            <section className='Section2'>
                <p>Add a task</p>
                <p>Use a controlled form to create a new task.</p>
                <form className='form' action="" onSubmit={AddNewTaskToArray}>
                    <label htmlFor="">
                        <label htmlFor="">Task title</label>
                        <input onChange={getTaskTitle} value={addTask} type="text" placeholder='e.g. Practice React hooks' name="" id="" />
                    </label>
                    <label htmlFor="">
                        <label htmlFor="">
                            <label htmlFor="">Priority</label>
                            <select onChange={getPriority} value={addPriority} name="" id="">
                                <option value="">choose proirity</option>
                                <option> high priority</option>
                                <option>medium priority</option>
                                <option>low priority</option>
                            </select>
                        </label>
                        <button type='submit'>+ Add task</button>
                    </label>
                </form>
            </section>
            <section className='Section3'>
                <div>
                    <div>
                        <p>Your tasks</p>
                        <p>Check tasks off, edit them, or remove them.</p>
                    </div>
                    <div className='FIlterBy'>
                        <p onClick={all}>All</p>
                        <p onClick={pending}>Pending</p>
                        <p onClick={completed}>Completed</p>
                    </div>
                </div>
                <div>
                    {/* !!! */}
                    {filtringArray.map((e, index) => (
                        <TaskCard
                            key={index}
                            id={e.id}
                            //  EditTask={EditTask} 
                            task={e.title}
                            state={e.isComplited}
                            priority={e.priority}
                            getCheckbOX={getCheckbOX}
                            AddCheckbox={AddCheckbox}
                            NewTasksArray={NewTasksArray}
                            seter={setNewTasksArray}
                            deletTask={deletTask}
                        />

                    ))}
                </div>
            </section>
            <section className='section4'>
                <div className='section4Para1'>
                    <div>
                        <p>Focus stopwatch</p>
                        <p>Practice useEffect + setinterval + cleanup.</p>
                    </div>
                    <div>
                        <p>{statutimer?'Running':'Posed'}</p>
                    </div>
                </div>
                <div className='section4Para2'>
                    {/* <h1>00:0{SecondsTimer}</h1> */}
                    <h1>{`${String(Math.floor(SecondsTimer / 60)).padStart(2, '0')}:${String(SecondsTimer % 60).padStart(2, '0')}`}</h1>
                    <div>
                        <button onClick={startTimer}>Start</button>
                        <button onClick={stopTimer}>Stop</button>
                        <button onClick={risetTimer}>Reset</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePage;