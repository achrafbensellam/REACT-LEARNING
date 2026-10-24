import './featuredproducts.css'
import icon1 from '../../../assets/img/homeicon3.jpg'
function FeaturedProducts() {
    return (
        <>
            <section className='FeaturedProducts'>
                <div className='HOMEfirstPRODUCTdiv'>
                    <h1><span>iPHONE 18</span> PRO</h1>
                    <p>The Ultimate Pro Experience. Powered by
                        Apple Intelligence and the A20 Pro chip.</p>
                    <div>
                        <div>
                            <img className='homeIcon' src={icon1} alt="" />
                        </div>
                        <div>
                            <p>From</p>
                            <p>$1,199</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>Camera:</p>
                            <p>48MP Fusion Triple Camera</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default FeaturedProducts;