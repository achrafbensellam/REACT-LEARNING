import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return(
        <footer className='thefooter'>
            <h3> portfolio<span style={{color:'red'}}>.</span></h3>
            <p>&copy; achrafbensellam@MOLENGEEK.COM</p>
            <div className='divIcon'>
                <FontAwesomeIcon className='icons' icon={faFacebookF} />  
                <FontAwesomeIcon className='icons' icon={faWhatsapp} />
                <FontAwesomeIcon className='icons' icon={faInstagram} />
            </div>
        </footer>
    )
}
export default Footer;
