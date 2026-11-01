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

    const [NewTasksArray, setNewTasksArray] = useState(
         JSON.parse(localStorage.getItem('tasks')) || []
    );
    const [taskCounter, setTaskCounter] = useState(0);
    // const [edit, setEdit] = useState(null);
    
    let AddNewTaskToArray = (e, id) => {
        e.preventDefault();
        if (addTask === '') {
            return
        } else if (addPriority === '') {
            return
        } else {
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
            setTaskCounter(taskCounter - 1);

    }
    // ! use effect:
    const [SecondsTimer, setSecondsTimer] = useState(0);
    const [statutimer, setStatuTimer] = useState(false);
    useEffect(() => {
        // let timer
        if (!statutimer) {
            return
        }
        let timer = setInterval(() => {
            setSecondsTimer((prev) => prev + 1)
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
    useEffect(()=>{
 localStorage.setItem('tasks',JSON.stringify(NewTasksArray));
    },[NewTasksArray]);
    return (
        <>
            <main className='TheMain'>
                <section className='Section1'>
                    <p className='Section1Para1'>REACT PRACTICE PROJECT</p>
                    <p className='Section1Para2'>My Study Planner</p>
                    <p className='Section1Para3'>Manage your learning tasks, keep them after refresh, and track a study session.</p>
                    <div className='Section1Counters'>
                        <div className='counter1'>
                            <p>Total tasks</p>
                            <p className='counterNUM'>{taskCounter}</p>
                        </div>
                        <div className='counter1'>
                            <p>Completed</p>
                            <p className='counterNUM'>{completedTasks.length}</p>
                        </div>
                        <div className='counter1'>
                            <p>Pending</p>
                            <p className='counterNUM'>{pendingTasks}</p>
                        </div>
                    </div>
                </section>
                <section className='Section2'>
                    <p className='Section2Para1'>Add a task</p>
                    <p className='Section2Para2'>Use a controlled form to create a new task.</p>
                    <form className='form' action="" onSubmit={AddNewTaskToArray}>
                        <label className='LabelTitle' htmlFor="">
                            <label htmlFor="">Task title</label>
                            <input className='sectionFormInputs' onChange={getTaskTitle} value={addTask} type="text" placeholder='e.g. Practice React hooks' name="" id="" />
                        </label>
                        <label className='LabelTitle2' htmlFor="">
                            <label className='PriorityLabel' htmlFor="">
                                <label htmlFor="">Priority</label>
                                <select className='sectionFormInputs' onChange={getPriority} value={addPriority} name="" id="">
                                    <option value="">choose proirity</option>
                                    <option>high priority</option>
                                    <option>medium priority</option>
                                    <option>low priority</option>
                                </select>
                            </label>
                            <button className='SectionFormBTN' type='submit'>+ Add task</button>
                        </label>
                    </form>
                </section>
                <section className='Section3'>
                    <div className='filteringDiv'>
                        <div>
                            <p className='Section3Para1'>Your tasks</p>
                            <p className='Section3Para2'>Check tasks off, edit them, or remove them.</p>
                        </div>
                        <div className='FIlterBy'>
                            <p className='CategoryFilters' onClick={all}>All</p>
                            <p className='CategoryFilters' onClick={pending}>Pending</p>
                            <p className='CategoryFilters' onClick={completed}>Completed</p>
                        </div>
                    </div>
                    <div>
                        {/* !!! */}
                        {filtringArray.map((e, index) => (
                            <TaskCard
                                key={index}
                                id={e.id}
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
                            <p className='FocusStopWatch'>Focus stopwatch</p>
                            <p className='FocusStopWatchpara1'>Practice useEffect + setinterval + cleanup.</p>
                        </div>
                        {/* <div> */}
                            <p className={statutimer?'TimerstatColor2':'TimerstatColor'}>{statutimer ? 'Running' : 'Posed'}</p>
                        {/* </div> */}
                    </div>
                    <div className='section4Para2'>
                        {/* <h1>00:0{SecondsTimer}</h1> */}
                        <h1 className='TIME'>{`${String(Math.floor(SecondsTimer / 60)).padStart(2, '0')}:${String(SecondsTimer % 60).padStart(2, '0')}`}</h1>
                        <div className='divTimeControl'>
                            <button className='timeControlBtn' onClick={startTimer}>Start</button>
                            <button className='timeControlBtn2' onClick={stopTimer}>Stop</button>
                            <button className='timeControlBtn3' onClick={risetTimer}>Reset</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default HomePage;