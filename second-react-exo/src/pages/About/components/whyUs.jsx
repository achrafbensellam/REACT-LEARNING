import './whyUs.css'
import flame from '../../../assets/img/flame.png';
import diamond from '../../../assets/img/diamond.png';
import caring from '../../../assets/img/caring.png';
function WhyUs() {
    return (
        <>
            <section className='WhyUsSection snowSECTION'>
                <div>
                    <p className='WHYCHOOSEUS'>WHY CHOOSE US</p>
                    <h1 className='WhyUsPARA1'>Winter Style, Without Compromise.</h1>
                    <p className='WhyUsPARA2'>Discover what makes your winter wardrobe special.</p>
                </div>
                <div className='cardsIconDiv'>
                    <div className='cardsIconDiv1'>
                        <img className='flameIcon' src={flame} alt="" />
                        <h3 className='WhyUsPARA4'>Premium Warmth</h3>
                        <p className='WhyUsPARA3'>Stay warm and comfortable with winter essentials designed for cold days.</p>
                    </div>
                    <div className='cardsIconDiv1'>
                        <img className='flameIcon' src={diamond} alt="" />
                        <h3 className='WhyUsPARA4'>Modern Style</h3>
                        <p className='WhyUsPARA3'>Discover stylish coats, sweaters, and outfits that elevate your winter look.</p>
                    </div>
                    <div className='cardsIconDiv1'>
                        <img className='flameIcon' src={caring} alt="" />
                        <h3 className='WhyUsPARA4'>Customer First</h3>
                        <p className='WhyUsPARA3'>Enjoy a smooth shopping experience and find the right pieces for your needs.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhyUs;