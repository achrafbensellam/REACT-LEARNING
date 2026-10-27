import './header.css'
import pic from '../assets/img/bensellamStore.png'
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    function clickBergur() {
        let burgerNav = document.querySelector('.navBurger')
        burgerNav.classList.toggle('navBurger2')
    }
    return (
        <>
            <header className='theHeader'>
                <div className='logoDiv'>
                    <div className='picDiv'>
                        <img style={{
                            width: '100%',
                            height: '100%'
                        }} src={pic} alt="" />
                    </div>
                    <h1 className='headerTitle'><span className='goldenLetter'>A.</span><span className='goldenLine'>Bensellam</span></h1>
                </div>
                <nav className='headerNav'>
                    <Link className='headerlink' to='/'>Home</Link>
                    <p className='HOVERBOX'></p>
                    <Link className='headerlink' to='/Products'>Products</Link>
                    <Link className='headerlink' to='/About'>Why Us</Link>
                    <Link className='headerlink' to='/Contact'>Contact</Link>
                </nav>
                <div className='headerBTN'>
                    <button  className='headerButton'>Start Now</button>
                </div>
                <div className='burgerMenuDIV'>

                <FontAwesomeIcon onClick={clickBergur} className='burgerMenu' icon={faBars} />
                </div>
                {/* !!!!!!!!! */}
                <div className='navBurger'>
                    <nav className='headerNav2'>
                        <Link className='headerlink2' to='/'>Home</Link>
                        <Link className='headerlink2' to='/Products'>Products</Link>
                        <Link className='headerlink2' to='/About'>Why Us</Link>
                        <Link className='headerlink2' to='/Contact'>Contact</Link>
                    </nav>
                    <div className='headerBTN2'>
                        <button className='headerButton2'>Start Now</button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;