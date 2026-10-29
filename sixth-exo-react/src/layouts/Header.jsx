import { Link } from "react-router-dom";
function HeaderPage() {
    return(
        <>
        <header>
            <h1>StudyPlanner</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </nav>
        </header>
        </>
    )
}
export default HeaderPage;