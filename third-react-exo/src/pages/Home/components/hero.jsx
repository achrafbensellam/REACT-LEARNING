import './hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
function HeroSection() {
    return (
        <>
            <section className='HErosectoin'>
                <div>
                    <div className='BENSELLAMTECH'>
                        <p className='BENSELLAMTECHpara1'></p>
                        <p className='BENSELLAMTECHpara2'>BENSELLAM<span className='BENSELLAMTECHpara3'>-</span>TECH</p>
                    </div>
                    <h1 className='BENSELLAMTECHpara4'>Upgrade Your Home Office: </h1>
                    <h1 className='Productivity1'>Best devices for </h1>
                    <h1 className='Productivity1'>Productivity in 2026</h1>

                    <p className='BENSELLAMTECHpara5'>Upgrade your tech ecosystem with our premium collection of smartphones,
                        high-performance laptops, and versatile tablets. Designed to power your work,
                        creativity, and everyday life—all at prices that make sense.
                    </p>
                    <button className='HeroSectionBTN'>Shop Now <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </section>
        </>
    )
}
export default HeroSection;