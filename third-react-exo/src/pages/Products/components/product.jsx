import './product.css'
import ProductCard from './childProduct';
import picture1 from '../../../assets/img/homePhone.jpg'
import picture2 from '../../../assets/img/hometab.jpg'
import picture3 from '../../../assets/img/photoPc.avif'
import picture4 from '../../../assets/img/photoScreen.avif'
import picture5 from '../../../assets/img/photoLaptop.avif'
import picture6 from '../../../assets/img/photoHeadPhones.avif'

function MYproducts() {
    const ProductsArray = [
        { id: 1, name: 'iPhone 18 PRO', category: 'Phone', isavailable: true, price: 1199, image:picture1  },
        { id: 2, name: 'iPad Pro 13"', category: 'Tablette', isavailable: true, price:1299, image: picture2 },
        { id: 3, name: 'MacBook Pro 16"', category: 'Laptop', isavailable: true, price:2499, image: picture3 },
        { id: 4, name: 'Screen 32"', category: 'Screen', isavailable: false, price: 1599, image: picture4 },
        { id: 5, name: 'MacBook Air 15"', category: 'Laptop', isavailable: false, price: 1299, image: picture5 },
        { id: 6, name: ' MagDock ', category: 'HeadPhones', isavailable: true, price: 349, image: picture6 }
    ];
   
    return (
        <>
            <section className='ProductsSection1'>
                <div className='BENSELLAMTECH'>
                    <p className='BENSELLAMTECHpara1'></p>
                    <p className='BENSELLAMTECHpara2'>BENSELLAM<span className='BENSELLAMTECHpara3'>-</span>TECH</p>
                </div>
                <h1 className='ProductsSectionPara1'>Next-Gen Devices <span className='ProductsSectionPara2'>Catalog</span></h1>
                <p className='ProductsSectionPara3'>Engineered for high-throughput productivity, studio creation, and executive performance in 2026</p>
            </section>
            <section className='Productsection2'>
                <h1 className='Productsection2Para1'>SHOP <span className='Productsection2Para2'>NOW <span className='Productsection2Para3'>:</span></span></h1>
                <div className='PRODUCTINPUTS'>
                    <input className='Productsection2input' placeholder='Choose by name' type="text" />
                    <select className='Productsection2Select' name="" id="">
                        <option value="">choose now</option>
                        <option value="">phone</option>
                        <option value="">tablette</option>
                        <option value="">laptop</option>
                        <option value="">screen</option>
                        <option value="">headPhones</option>
                    </select>
                </div>
                <div className='Productsection2CardsDiv'>
                {ProductsArray.map((e)=>( 
         <ProductCard ke={e.id} name={e.name} category={e.category} price={e.price} available={e.isavailable} image={e.image}/>
        ))}
                </div>
            </section>
        </>
    )
}
export default MYproducts;