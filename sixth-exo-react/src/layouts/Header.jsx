import { Link } from "react-router-dom";
import './header.css'
function HeaderPage() {
    return(
        <>
        <header className="theHeader">
            <h1 className="HeaderTitle">StudyPlanner</h1>
            <nav className="navBarLINKS">
                <Link className="links" to='/'>Home</Link>
                <Link className="links" to='/About'>About</Link>
            </nav>
        </header>
        </>
    )
}
export default HeaderPage;