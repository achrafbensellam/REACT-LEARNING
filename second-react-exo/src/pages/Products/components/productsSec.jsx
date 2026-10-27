import './ProductsSec.css';
import CARD from './productCard';
import jaket from '../../../assets/img/jaket.jpg'
import pants from '../../../assets/img/pents.jpg'
import hat from '../../../assets/img/hat.jpg'
import shose from '../../../assets/img/shose.jpg'
function ProductsSection() {
    return(
        <>
        <section className='productsSection'>
            <h1 className='productsSectionTitle'>PRODUCTS</h1>
            <p className='productsSectionPARA'>CHOOSE YOUR STYLE NOW</p>
            <div className='fotherproductInputs'>
                <h1 className='productDiscover'>Discover <span className='productNOW'>Now.</span></h1>
            <div className='productInputs'>
                <input className='productSearch' placeholder='seach your style Now... ' type="text" />
                <select className='productSelect' name="" id="">
                    <option value="">shoose your style</option>
                    <option ></option>
                    <option ></option>
                    <option ></option>
                    <option ></option>
                </select>
            </div>
            </div>
            <div className='cardsDiv'>
                <CARD picture={jaket} name='Puffer Jacket' category='Jackets'num={1} price={1200} Quantity={10}/>
                <CARD picture={pants} name='Cutton Chinos' category='Pants'num={2} price={650} Quantity={1}/>
                <CARD picture={shose} name='Boots' category='Shose'num={3} price={2000} Quantity={5}/>
                <CARD picture={hat} name='Beanie' category='Hats'num={4} price={120} Quantity={4}/>
            </div>
        </section>
        </>
    )
}
export default ProductsSection ;