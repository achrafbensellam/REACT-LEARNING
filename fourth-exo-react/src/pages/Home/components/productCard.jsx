import './productCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Phone from '../../../assets/img/homePhone.jpg'
// import { useState } from 'react';
function Card(props) {
    console.log(props.product.quantity);
    
    return(
        <>
        <div className='card1'>
            <div className='cardPICTUREdiv'>
                <img className='cardPICTURE' src={Phone} alt="" />
                <p className='Item'>item 01</p>
            </div>
            <div className='productInfoDiv'>
                <div className='YourCollection'>
                    <div >
                        <p style={{backgroundColor:'white'}}>YOUR COLLECTION</p>
                        <h2 style={{backgroundColor:'white'}}>Wireless Headphones</h2>
                    </div>
                    <FontAwesomeIcon onClick={()=>props.remove(props.product.name)} style={{backgroundColor:'white'}} icon={faTrashCan}/>
                </div>
                <div  className='CardCounters'>
                    <div>
                        <p style={{backgroundColor:'white'}}>UNIT PRICE</p>
                        <p style={{backgroundColor:'white'}}>299.00 MAD</p>
                    </div>
                    <div className='counters'>
                        <p onClick={()=>props.btn2(props.product.name)}>-</p>
                        <p style={{backgroundColor:'white'}}>{props.product.quantity}</p>
                        <p onClick= {()=>props.btn1(props.product.name) }>+</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;