import StudentCard from './components/card';
import { useState } from 'react';
import './home.css'
function HomePage() {
    const StudentArray=[
        {name:'w',age:25,city:'Al Hociema'},
    ];
    const [studentName,setStudentName]= useState('');
    let getStudentname = (e)=>{
        setStudentName(e.target.value);

    }
    const [studentAge,setStudentAge]= useState('');
    let getStudentAge = (e)=>{
        setStudentAge(e.target.value);

    }
    const [studentCity,setStudentCity]= useState('');
    let getStudentCity = (e)=>{
        setStudentCity(e.target.value);

    }
    const [NewArray,setNewArray]=useState(StudentArray);
    const[editStudent,SetEditStudent]=useState(null);
    let addToArray = (e)=>{
        e.preventDefault()
        if (editStudent !== null) {
            setNewArray((prev)=>prev.map((e,i)=>( 
                i === editStudent?{ ...e, name:studentName ,age:studentAge,city:studentCity}:e
            )))
            setStudentName('')
        setStudentAge('');
        setStudentCity('')
        SetEditStudent(null)
        }else{
            if(studentName == ''){
                return
            }else if (studentAge == '') {
                return
            }else if (studentCity == '') {
                return
            }else{

                setNewArray((prev)=>([
               ...prev,{name:studentName,age:studentAge,city:studentCity}
           ]))
           setStudentName('')
           setStudentAge('');
           setStudentCity('');
           }
            }
       

    }
    
    let deleteStudent = (index)=>{
        setNewArray(NewArray.filter((e,i)=> i !== index))
    }
    let editeStudent = (index)=>{
        let findStudent = NewArray.find((e,i)=>{
            return i == index
        })
        console.log(findStudent);
        
        setStudentName(findStudent.name);
        setStudentAge(findStudent.age);
        setStudentCity(findStudent.city);
        SetEditStudent(index)
    }
    return(
        <>
        <section className='fotherSection'>
            <div>
                <p className='fotherSectionPara1'>- REACT . BEGINNER CRUD</p>
                <h1 className='fotherSectionPara2'>Student Manager</h1>
                <p className='fotherSectionPara3'>Create, Read, Update and Delete using useState.</p>
            </div>
            <form className='theform' onSubmit={addToArray}>
                <h2 className='formAddStudent'>Add a student</h2>
                <label htmlFor="">
                    <label htmlFor="">
                        <label className='inputName' htmlFor="">Name :</label><br /><br />
                        <input className='FormInputs' onChange={getStudentname} value={studentName} placeholder='student name' type="text" />
                    </label> <br /><br />
                    <label htmlFor="">
                        <label htmlFor="">Age :</label><br /><br />
                        <input className='FormInputs' onChange={getStudentAge} value={studentAge}  type="number" />
                    </label> <br /><br />
                    <label htmlFor="">
                        <label htmlFor="">City :</label><br /><br />
                        <input className='FormInputs' onChange={getStudentCity} value={studentCity} placeholder='city' type="text" />
                    </label>
                </label><br /><br />
                <button className='FormBtn' type='submit'>Add Student</button>
            </form>
            <div className='CardsDiv'>
                <div className='StudentsCardsDIV'>
                    <p className='CardsDIVpara'>Students</p>
                    <p className='CardsDIVpara'>Total</p>
                </div>
                {NewArray.map((e,index)=>(
                    
                    <StudentCard key={index} index={index} name={e.name} age={e.age} city={e.city} deleteFun = {deleteStudent} editeFun={editeStudent}/>
                    
                ))}
            </div>
        </section>
        </>
    )
}
export default HomePage;