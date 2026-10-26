import './order.css';
import picture1 from '../../../assets/img/homePhone.jpg'
import picture2 from '../../../assets/img/hometab.jpg'
import picture3 from '../../../assets/img/photoPc.avif'
import picture4 from '../../../assets/img/photoScreen.avif'
import picture5 from '../../../assets/img/photoLaptop.avif'
import picture6 from '../../../assets/img/photoHeadPhones.avif'
import { useState } from 'react';
function Order() {
    const ProductsArray = [
        { id: 1, name: 'iPhone 18 PRO', category: 'Phone', isavailable: true, price: 1199, image:picture1  },
        { id: 2, name: 'iPad Pro 13"', category: 'Tablette', isavailable: true, price:1299, image: picture2 },
        { id: 3, name: 'MacBook Pro 16"', category: 'Laptop', isavailable: true, price:2499, image: picture3 },
        { id: 4, name: 'Screen 32"', category: 'Screen', isavailable: false, price: 1599, image: picture4 },
        { id: 5, name: 'MacBook Air 15"', category: 'Laptop', isavailable: false, price: 1299, image: picture5 },
        { id: 6, name: ' MagDock ', category: 'HeadPhones', isavailable: true, price: 349, image: picture6 }
    ];
    const [name,setname]= useState('')
        function textInput(e) {
       setname(e.target.value.trim());
       
    }
    
    const [email,setemail]= useState('')

    function emailInput(e) {
        setemail(e.target.value.trim())
        
    }
    const [select,setselect]= useState('')
    let findbyName = ProductsArray.find((e)=>{return e.name === select})
    
    function selectnput(e) {
       setselect(e.target.value)
        
    }
    const [quantity,setquantity]= useState('')

    function quantityInput(e) {
       setquantity(e.target.value)
        
    }
    function Preventing(e) {
        e.preventDefault();
        if(name === ''){
        return
       }else if(email == ''){
        return
       }else if (select =='') {
        return
       }else if (quantity <= 0) {
        alert("Quantity must be greater than 0")
        return
       }else if(findbyName.isavailable === false){
        return
       }else{
        setname('');
        setemail('');
        setquantity('');
        setselect('');
        alert(`
            - costumer name : ${name}
            - email : ${email}
            - product name : ${select}
            - quantity : ${quantity}
            TOTAL PRICE : $${quantity*findbyName.price}
            `)
       }
        
    }
    return (
        <>
            <section className='orderSection'>
                <h1 className='orderSectionPara1'>ORDER FORM</h1>
                <p className='orderSectionPara2'>Upgrade your home office with next-gen productivity tech.</p>
                <form onSubmit={Preventing} action="" className='OrderForm'>
                    <label className='OrderFormTitles' htmlFor="">Name :</label> <br /><br />
                    <input value={name} onChange={textInput} className='OrderFormINPUT' type="text" placeholder='jhone doe' id="" /> <br /><br />
                    <label className='OrderFormTitles' htmlFor="">Email :</label> <br /><br />
                    <input  value={email} onChange={emailInput} className='OrderFormINPUT' placeholder='exemple@email.com' type="email" /><br /><br />
                    <label className='OrderFormTitles' htmlFor="">Product selection :</label><br /><br />
                    <select  value={select} onChange={selectnput} className='OrderFormINPUT' name="" id=""><br /><br />
                    <option>choose now</option>
                        {ProductsArray.map((e)=>(
                            <option value={e.name}>{e.name}</option>
                        ))}
                    </select><br /><br />
                    <label className='OrderFormTitles' htmlFor="">Quantity :</label><br /><br />
                    <input  value={quantity} onChange={quantityInput} className='OrderFormINPUT' type="number" /><br /><br />
                    <button className='OrderFormBTN' type='submit'>Order Now</button>
                </form>
                {/* <div className='ProductSelectionDIV'>
                    <p className='ProductSelectionDIVpara1'>Product selection :</p>
                    <div className='ProductSelectionDIV-Cards'>
                        <div className='ProductSelectionDIV-Card1'>
                            <div className='ProductSelectionIMAGE-info-DIV'>
                                <div>
                                    <img className='ProductSelectionIMAGE' src={pic} alt="" />
                                </div>
                                <div className='orderNAME-PRICE'>
                                    <p className='orderNAME'>name</p>
                                    <p className='orderPRICE'>price</p>
                                </div>
                            </div>
                            <div className='ProductSelectioninfo-DIV'>
                                <p className='orderQuantity'>Quantity </p>
                                <div className='ProductSelectioninfo-counters'>
                                    <p className='ordercounter1'>-</p>
                                    <p className='ordercounter'>1</p>
                                    <p className='ordercounter1'>+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            </section>
        </>
    )
}
export default Order;