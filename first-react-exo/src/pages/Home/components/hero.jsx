import './hero.css'
import image from '../../../assets/img/full-stack-development-2.jpg'

function HeroSection() {
    return (
        <section className='herosection'>
            <div className='div1' style={{ width: '50%' }}>
                <h1 className='myname'>Achraf Bensellam</h1>
                <p className='full-dev'>FULLSTACK DEVELOPER</p>
                <p className='heroPara'>
                    My name is Achraf Benselllam im 23 years old , full stack developer i started my learning journy with MolenGeek coding class
                    under the supervising of coach Zakariya
                </p>
            </div>
            <div className='div2'>
                <img className='pic' src={image} alt="" />
            </div>
        </section>
    )
}

export default HeroSection ;