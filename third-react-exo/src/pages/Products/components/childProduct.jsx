import './childProduct.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
function ProductCard(props) {
    
   function Details() {
            alert(`
                ID: ${props.key}
                NAME: ${props.name}
                PRICE: ${props.price}
                CATEGORY: ${props.category}
                AVAILABLITY: ${props.available}
                `)
    }
    function PRODUCTinfo(props) {
        alert(
            `
            - product name :${props.name}
            - PRICE: ${props.price}
            - CATEGORY: ${props.category}
            `
        )
     
    }
   return(
     <>
    <div className='CONtenaireCARD'>
        <div className='ProductCardIMAGEfotherDIV'>
            <div>
                <img className='ProductCardIMAGE' src={props.image} alt="" />
            </div>
            <div className={`${props.available?'ProductIMGinfo':'colorRED'}`}><p className='categoryPOINT'></p>{ props.available?'on stock':'out of stock'}</div>
            <p className='ProductIMGinfo2'>0{props.key}</p>
            <button onClick={Details} className='ProductIMGinfo3'>details</button>
        </div>
        <div className='productCardINformations'>
            <p className='productCardINforPARA1'>{props.category}</p>
            <h1 className='productCardINforPARA2'>{props.name}</h1>
            <p className='productCardINforPARA3'>The Ultimate Pro Experience powered by Apple Intelligence and next-generation 2nm architecture.</p>
            <div className='productCardPricBTNdiv'>
                <div>
                    <p style={{color:'gray'}}>From</p>
                    <h1 className='productCardPricBTNdivPARA1'>${props.price}</h1>
                </div>
                {props.available&&
                <button onClick={()=>PRODUCTinfo(props)} className='productCardBTN'>Buy Now<FontAwesomeIcon icon={faArrowRight}/></button>}
            </div>
        </div>
    </div>
    </>
    
   )
}
export default ProductCard ;