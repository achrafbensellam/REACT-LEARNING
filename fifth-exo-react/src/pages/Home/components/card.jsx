import './card.css';
function StudentCard(props) {
    return(
        <>
        <div className='Card1'>
            <div>
                <h3 className='StudentName'>{props.name}</h3>
                <div className='AgeANDcity'>
                    <p><span className='Age-City-Span'>Age :</span> {props.age}</p>
                    <p><span className='Age-City-Span'>City : </span>{props.city}</p>
                </div>
            </div>
            <div className='CardBtns'>
                <button className='editBTN' onClick={()=>{props.editeFun(props.index)}}>Edit</button>
                <button className='deleteBTN' onClick={()=>{props.deleteFun(props.index)}}>Delete</button>
            </div>
        </div>
        </>
    )
}
export default StudentCard;