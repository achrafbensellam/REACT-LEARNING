import './header.css';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <>
        <header className='theHeader'>
            <h1 className='HeaderTitle'>cartly<span className='headerTitlePoint'>.</span></h1>
            <nav className='navBar'>
                <Link className='navBarlinks' to='/'>Home</Link>
                <Link className='navBarlinks' to='/About'>About</Link>
            </nav>
            <p className='headerReactPractice'>React practice</p>
        </header>
        </>
    )
}
export default Header ;