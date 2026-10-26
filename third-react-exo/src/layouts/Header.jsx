import './header.css';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    function clickBergur() {
        let burgerNav = document.querySelector('.HeaderNavbar2')
        burgerNav.classList.toggle('HeaderNavbar3')
    }
    return (
        <>
            <header className='TheHeader'>
                <div className='divLogoContenair'>
                    <div className='imageDiv'>
                        <img className='logoPic' src={logo} alt="" />
                    </div>
                    <div className='headerTitle'>
                        <h1 className='ahTechTITLE'><span className='ah'>BN.</span> <span className='tiriTECH'>TECH</span></h1>
                        <p className='ALHOCIEMA'>AL HOCEIMA</p>
                    </div>
                </div>
                <nav className='HeaderNavbar'>
                    <Link className='headerNavLinks' to='/'>Home</Link>
                    <Link className='headerNavLinks' to='/Products'>Products</Link>
                    <Link className='headerNavLinks' to='/Order'>Order</Link>
                    <Link className='headerNavLinks' to='/About'>About</Link>
                    <button className='headerBTN'>Start Now</button>
                </nav>
                <FontAwesomeIcon onClick={clickBergur} className='burger' icon={faBars}/>
                <nav className='HeaderNavbar2'>
                    <Link className='headerNavLinks2' to='/'>Home</Link>
                    <Link className='headerNavLinks2' to='/Products'>Products</Link>
                    <Link className='headerNavLinks2' to='/Order'>Order</Link>
                    <Link className='headerNavLinks2' to='/About'>About</Link>
                    <button className='headerBTN2'>Start Now</button>
                </nav>
            </header>
        </>
    )
}
export default Header;