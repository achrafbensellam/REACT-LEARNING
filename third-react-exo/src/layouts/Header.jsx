import './header.css';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <header className='TheHeader'>
                <div className='divLogoContenair'>
                    <div className='imageDiv'>
                        <img className='logoPic' src={logo} alt="" />
                    </div>
                    <div className='headerTitle'>
                        <h1 className='ahTechTITLE'><span className='ah'>AH.</span> <span className='tiriTECH'>TECH</span></h1>
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
            </header>
        </>
    )
}
export default Header;