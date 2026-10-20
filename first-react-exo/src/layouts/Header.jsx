import './header.css'
function Header(){
    return(
        <header className='theHeader'>
            <h1>Portfolio<span  className='nameHeader'>.</span></h1>
            <nav className='navbar'>
                <ul className='navList'>
                    <li className='listAtems' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'white'}} href="">home</a> </li>
                    <li className='listAtems' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'white'}} href="">about</a> </li>
                    <li className='listAtems' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'white'}} href="">contact</a> </li>
                    
                </ul>
            </nav>
            <button className='headBTN'>Discover</button>
        </header>
    )
}
export default Header;