import './ProductCard.css'
function CARD(props) {
    let num = props.Quantity
    return (
        <>
         {num>0&&
            <div className='CardInfoContenainr'>
                <div className='productPicDIv'>
                    <img className='cardPicture' src={props.picture} alt="" />
                    <p className='number'>0{props.num}</p>
                    <div className='ProductKEPPwarm'>
                        <p className='ProductKEPPwarmPOINT'></p>
                        <p className='KEPPwarm'>keep Warm</p>
                    </div>
                </div>
               
                <div className='productDivInfo'>
                    <p className='productCategory'>{props.category}</p>
                    <p className='productName'>{props.name}</p>
                    <p className='cardLOREM'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className='productPriceDiv'>
                        <h2>{props.price}<span className='MAD'>MAD</span></h2>
                        <button className='productCardBTN'>Buy Now</button>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default CARD;