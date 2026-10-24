import logo from '../assets/img/logo.png'
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function FooterPage() {
    return (
        <>
            <footer className='TheFooter'>
                <div className='firstContenairFooter'>
                    <div>
                        <div className='divLogoContenair'>
                            <div className='imageDiv'>
                                <img className='logoPic' src={logo} alt="" />
                            </div>
                            <div className='headerTitle'>
                                <h1 className='ahTechTITLE'><span className='ah'>BN.</span> <span className='tiriTECH'>TECH</span></h1>
                                <p className='ALHOCIEMA'>AL HOCEIMA</p>
                            </div>
                        </div>
                        <p className='firstContenairFooterPara1'>
                            Upgrade your work, creativity, and
                            everyday life with our premium
                            collection of devices.
                            Handpicked tech solutions to
                            power your ecosystem.
                        </p>
                        <div className='firstContenairFooterICONS'>
                            <FontAwesomeIcon className=' firstContenairFooterICON1' icon={faFacebook} />
                            <FontAwesomeIcon className=' firstContenairFooterICON2' icon={faInstagram} />
                            <FontAwesomeIcon className=' firstContenairFooterICON3' icon={faLinkedin} />
                            <FontAwesomeIcon className=' firstContenairFooterICON4' icon={faYoutube} />
                        </div>
                    </div>
                    <div className='footerTNFO'>
                        <h3>CATEGORIES</h3>
                        <p>Products</p>
                        <p>Laptops</p>
                        <p>Tablets</p>
                        <p>Smartphones</p>
                    </div>
                    <div className='footerTNFO'>
                        <h3>CUSTOMER SERVICE</h3>
                        <p>Track Your Order</p>
                        <p>Support</p>
                        <p>Delivery Info</p>
                        <p>Warranty & Return</p>
                    </div>
                    <div>
                        <h3>STORE INFORMATION</h3>
                        <div className='foterstorInfo'>
                            <p>Address</p>
                            <p>Al Hoceima, Morocco</p>
                        </div>
                        <div className='foterstorInfo'>
                            <p>Phone</p>
                            <p>+303 457 5960</p>
                        </div>
                        <div className='foterstorInfo'>
                            <p>Hours</p>
                            <p>08:00 AM - 12:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className='secondContenairFooter'>
                    <p>&copy; 2026 BN-TECH. All rights reserved.</p>
                    <p>Privacy Policy . Terms & Conditions</p>
                </div>
            </footer>
        </>
    )
}
export default FooterPage;