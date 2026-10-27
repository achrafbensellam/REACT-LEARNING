import './hero.css';
import pic from '../../../assets/img/hero.jpg'
import Card from './productCard';
import { useState } from 'react';
function Herosection() {

    let ProductsArray = [
        { name: 'Iphon 18', price: 1200, quantity: 0 },
        { name: 'Ipad', price: 1400, quantity: 0 },
        { name: 'laptop', price: 2200, quantity: 0 }
    ];
    // let productsNum =()=>{

    // }
    // setHowManyPRO(howManyPRO += ProductsArray.length)
    // console.log(ProductsArray.length + howManyPRO);

    const [quantity, setQuantity] = useState(ProductsArray);
    const [totalQuantitys, setTotalQUA] = useState(0);

    let incresQuamtity = (name) => {
        setQuantity(quantity.map((e) => (
            e.name === name ? { ...e, quantity: e.quantity + 1 } : e
        )))
        setTotalQUA(totalQuantitys + 1)
    }
    let decresQuamtity = (name) => {
        setQuantity(quantity.map((e) => (
            e.name === name && e.quantity > 0 ? { ...e, quantity: e.quantity - 1 } : e
        )))
        if (totalQuantitys > 0) {
            setTotalQUA(totalQuantitys - 1)
        }

    }
    const [ADDtoARRAY, setTHEarray] = useState(ProductsArray);
    const [productinput, getproductinput] = useState();
    let nameInput = (e) => {
        getproductinput(e.target.value.trim())
    }
    const [productPrice, getproductPrice] = useState();
    let priceInput = (e) => {
        getproductPrice(e.target.value)
    }
    const [product, setproduct] = useState('')
    const [howManyPRO, setHowManyPRO] = useState(quantity.length);
    // const[totalprices,settotalprices]=useState(0)
    let getproductNmae = (e) => {
        e.preventDefault();
        if (productPrice<=0) {
            return
        }
        setQuantity([...quantity, { name: productinput, price: productPrice, quantity: 0 }])
        setHowManyPRO(howManyPRO + 1)

        getproductinput('');
        getproductPrice('');
    }
    let removeItem = (name) => {
        setQuantity(quantity.filter((e) => e.name !== name))
        setHowManyPRO(howManyPRO - 1)

    }

    // quantity.map((e)=>
    //     settotalprices(totalprices+(e.price * e.quantity))
    // );
    const totalprices = quantity.reduce(
        (total, product) => total + Number(product.price) * product.quantity,
        0
    );

    console.log(totalprices);

    return (
        <>
            <section className='herosection'>
                <div className='herosectionDIV1'>
                    <h4 className='heroSectionPara1'>THE REACT MINI PROJECT</h4>
                    <h1 className='heroSectionPara2'>A little cart.</h1>
                    <h1 className='heroSectionPara3'>A lot to learn.</h1>
                    <p className='heroSectionPara4'>Your very own mini shopping cart. Add products, change
                        quantities, and watch React update everything in real time.</p>
                    <button className='heroSectionBTN'>Explore your cart</button>
                    <div className='heroSectionPara5'>
                        <p className='heroSectionPara6'>useState</p>
                        <p className='heroSectionPara6'>spread operator</p>
                        <p className='heroSectionPara6'>propa</p>
                        <p className='heroSectionPara6'>.map()</p>
                    </div>
                </div>
                <div className='herosectionDIV2'>
                    <img className='heropic' src={pic} alt="" />
                </div>
            </section>
            <section className='productSection'>
                <div className='contersDiv'>
                    <div className='contersDivpara2'>
                        <p className='contersDivpara1'>Defferent Products</p>
                        <h2>{howManyPRO}</h2>
                    </div>
                    <div className='contersDivpara2'>
                        <p className='contersDivpara1'>Totale Quantity</p>
                        <h2>{totalQuantitys}</h2>
                    </div>
                    <div className='contersDivpara2'>
                        <p className='contersDivpara1'>YOUR CART TOTAL</p>
                        <h2>{totalprices}MAD</h2>
                    </div>
                </div>
                <div className=''>
                    <p className='productsCARDSpara3'>01 / YOUR PICKS</p>
                    <h1 className='productsCARDSpara1'>Your collection.</h1>
                    <div className='productsCARDSpara2'>
                        <p style={{ color: 'gray' }}>Manage everything in your little shopping world.</p>
                        <p className='productsCARDSpara4'>{howManyPRO} products</p>
                    </div>
                    <div className='containerPRODUCTS'>
                        {quantity.map((e) => (
                            <Card btn1={incresQuamtity} btn2={decresQuamtity} product={e} remove={removeItem} />

                        ))}
                    </div>
                </div>
            </section>
            <section className='formSection'>
                <div className='formsectiondiv1'>
                    <p className='formsectiondiv1para1'>02 / MAKE IT YOURS</p>
                    <h1 className='formsectiondiv1para2'>One more thing?</h1>
                    <p className='formsectiondiv1para3'>Got something else in mind? Add a new
                        c.g. Bluctooth Speaker
                        product to your collection.</p>
                </div>
                <form className='formsectiondivForm' value={product} onSubmit={getproductNmae} action="">
                    <h1 className='FORMaddProduct'>Add product <span style={{color:'rgb(128, 0, 128)'}}>:</span></h1>
                    <label className='formTitles' htmlFor="">PRODUCT NAME :</label><br /><br />
                    <input className='formInputs' onChange={nameInput} value={productinput} placeholder='e.g mackBOOK' type="text" /><br /><br />
                    <label className='formTitles' htmlFor="">PRODUCT PRICE :</label><br /><br />
                    <input className='formInputs' onChange={priceInput} placeholder='e.g 19000' value={productPrice} type="number" /><br /><br />
                    <button className='formBtn' type='submit'>Add to collection </button>
                </form>
            </section>
        </>
    )
}
export default Herosection;