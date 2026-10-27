import './hero.css'
import heroPic from '../../../assets/img/heroPic.png'
function HeroSection(params) {
    return (
        <>
            <section className='heroSection'>
                <div className='heroContent'>
                    <div className='HerolineDive'>
                        <div className='heroLINE'></div>
                        <p className='WINTERISCOMING'>WINTER IS COMING</p>
                    </div>
                    <h1 className='heroHeadeLine'><span className='heroFIND'>FIND</span> YOUR TRUE <span className='heroSTYLE'>STYLE</span> <span className='heroHERE'>HERE</span> </h1>
                    <p className='heroPara'>Our fashion collection is made with high-quality materials and
                        designed to fit your body like a glove. Shop now to find the perfect
                        pieces for your wardrobe.
                    </p>
                    <button className='heroBtn'>Shop Now button</button>

                </div>
                <div className='heroPicDiv'>
                    <img className='heroIMG' src={heroPic} alt="" />
                </div>
            </section>
        </>
    )
}
export default HeroSection;