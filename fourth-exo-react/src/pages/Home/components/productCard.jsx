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
                {/* <p className='Item'>item 01</p> */}
            </div>
            <div className='productInfoDiv'>
                <div className='YourCollection'>
                    <div >
                        <p className='card1Para1'>YOUR COLLECTION</p>
                        <h2>{props.product.name}</h2>
                    </div>
                    <FontAwesomeIcon className='deletIcon' onClick={()=>props.remove(props.product.name)} icon={faTrashCan}/>
                </div>
                <div  className='CardCounters'>
                    <div>
                        <p className='card1Para2'>UNIT PRICE</p>
                        <p className='card1Para3'>{props.product.price} <span className='card1Para4'>MAD</span></p>
                    </div>
                    <div className='counters'>
                        <p className='countersBtns' onClick={()=>props.btn2(props.product.name)}>-</p>
                        <p >{props.product.quantity}</p>
                        <p className='countersBtns'  onClick= {()=>props.btn1(props.product.name) }>+</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;