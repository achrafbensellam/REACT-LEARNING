import './Footer.css'
import pic2 from '../assets/img/bensellamStore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faLinkedin,
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <>
            <footer className='theFooter'>
                <div className='FooterLogoDiv'>
                    <div className='logoDiv'>
                        <div className='picDiv'>
                            <img style={{
                                width: '100%',
                                height: '100%'
                            }} src={pic2} alt="" />
                        </div>
                        <h1 className='headerTitle'><span className='goldenLetter'>A.</span><span className='goldenLine'>Bensellam</span></h1>
                    </div>
                    <p className='CopyRight'>&copy; achrafBensellam</p>
                    <p className='CopyRight'>MolenGeek-Al Hociema</p>
                    <p className='CopyRight'>Coding Class 2026</p>
                </div>
                <div className='divFooterPages'>
                    <div className='FooterPage1'>
                        <h3 className='FOOTERheadlines'>Home</h3>
                        <p>hero section</p>
                        <p>clothes picture</p>
                        <p>good UI</p>
                        <p>flash button</p>
                    </div>
                    <div className='FooterPage1'>
                        <h3 className='FOOTERheadlines'>Products</h3>
                        <p>hero section</p>
                        <p>clothes picture</p>
                        <p>good UI</p>
                        <p>flash button</p>
                    </div>
                    <div className='FooterPage1'>
                        <h3 className='FOOTERheadlines'>Why Us</h3>
                        <p>hero section</p>
                        <p>clothes picture</p>
                        <p>good UI</p>
                        <p>flash button</p>
                    </div>
                    <div className='FooterPage1'>
                        <h3 className='FOOTERheadlines'>Contact</h3>
                        <p>hero section</p>
                        <p>clothes picture</p>
                        <p>good UI</p>
                        <p>flash button</p>
                    </div>

                </div>
                <div className='joinUsDiv'>
                    <h1 className='joinUS'>join <span className='US'>US</span> Now</h1>
                    <div className='MediaIcons'>
                        <FontAwesomeIcon className='footerIcon' icon={faFacebook} />
                        <FontAwesomeIcon className='footerIcon' icon={faInstagram} />
                        <FontAwesomeIcon className='footerIcon' icon={faTiktok} />
                        <FontAwesomeIcon className='footerIcon' icon={faLinkedin} />
                        <FontAwesomeIcon className='footerIcon' icon={faGithub} />
                        <FontAwesomeIcon className='footerIcon' icon={faYoutube} />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;