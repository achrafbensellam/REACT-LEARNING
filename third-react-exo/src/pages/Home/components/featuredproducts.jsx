import './featuredproducts.css'
import icon1 from '../../../assets/img/homeicon3.jpg'
import icon2 from '../../../assets/img/homeicon2.jpg'
import icon3 from '../../../assets/img/homeicon1.jpg'
import HOMEphone from '../../../assets/img/homephone.jpg'
import HOMEtab from '../../../assets/img/hometab.jpg'
import HOMEpc from '../../../assets/img/homepc.jpg'
function FeaturedProducts() {
    return (
        <>
            <section className='FeaturedProducts'>
                <h1 className='FeaturedProductsPara1'>FEATURED PRODUCTS</h1>
                <p className='FeaturedProductsPara2'>Explore Our Latest Innovation</p>
                <div className='featuredProductsDiv '>

                    <div className='HOMEfirstPRODUCTdiv'>

                        <div className='HOMEfirstPRODUCTchildDIV'>
                            <p className='HOMEfirstPRODUCTchildDIVPara1'><span className='HOMEfirstPRODUCTchildDIVPara2'>iPHONE 18</span> <span style={{ color: 'white' }}>PRO</span></p>
                            <p className='HOMEfirstPRODUCTchildDIVPara3'>The Ultimate Pro Experience. Powered by
                                Apple Intelligence and the A20 Pro chip.</p>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon1} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>From</p>
                                    <p className='HOMEiconDIV1Para2'>$1,199</p>
                                </div>
                            </div>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon2} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>Camera:</p>
                                    <p className='HOMEiconDIV1Para2'>48MP Fusion Triple Camera</p>
                                </div>
                            </div>
                            <button className='FeaturedProductsBTN'>Shop Now</button>
                        </div>
                        <div className='HOMEfirstPRODUCTdivIMAGE'>
                            <img className='HOMEphoneIMG' src={HOMEphone} alt="" />
                        </div>

                    </div>
                    <div className='HOMEfirstPRODUCTdiv'>

                        <div className='HOMEfirstPRODUCTchildDIV'>
                            <p className='HOMEfirstPRODUCTchildDIVPara1'><span className='HOMEfirstPRODUCTchildDIVPara2'>iPad Pro 13"</span> <span style={{ color: 'white' }}>(M5)</span></p>
                            <p className='HOMEfirstPRODUCTchildDIVPara3'>The Ultimate Pro Experience. Powered by
                                Apple Intelligence and the M5 chip.</p>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon1} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>From</p>
                                    <p className='HOMEiconDIV1Para2'>$1,299</p>
                                </div>
                            </div>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon3} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>Display:</p>
                                    <p className='HOMEiconDIV1Para2'>13" Tandem OLED ProMotion</p>
                                </div>
                            </div>
                            <button className='FeaturedProductsBTN'>Shop Now</button>
                        </div>
                        <div className='HOMEfirstPRODUCTdivIMAGE'>
                            <img className='HOMEphoneIMG' src={HOMEtab} alt="" />
                        </div>

                    </div>
                    <div className='HOMEfirstPRODUCTdiv'>

                        <div className='HOMEfirstPRODUCTchildDIV'>
                            <p className='HOMEfirstPRODUCTchildDIVPara1'><span className='HOMEfirstPRODUCTchildDIVPara2'>MacBook Pro 16"</span> <span style={{ color: 'white' }}>M6 MAX</span></p>
                            <p className='HOMEfirstPRODUCTchildDIVPara3'>The Ultimate Pro Experience. Powered by
                                Apple Intelligence and the M6 Max chip.</p>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon1} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>From</p>
                                    <p className='HOMEiconDIV1Para2'>$2,499</p>
                                </div>
                            </div>
                            <div className='HOMEiconDIV1'>
                                <div className='divHomeIcon'>
                                    <img className='homeIcon' src={icon2} alt="" />
                                </div>
                                <div>
                                    <p className='HOMEiconDIV1Para1'>Graphics:</p>
                                    <p className='HOMEiconDIV1Para2'>40-core GPU / Up to 128GB RAM</p>
                                </div>
                            </div>
                            <button className='FeaturedProductsBTN'>Shop Now</button>
                        </div>
                        <div className='HOMEfirstPRODUCTdivIMAGE'>
                            <img className='HOMEphoneIMG' src={HOMEpc} alt="" />
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default FeaturedProducts;