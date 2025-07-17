import { Link } from "react-router";
import './nav-style.css'
function Navbar() {
    return (
        <div className="Navbar">
        <Link className="Link"to='/'><h3>home</h3></Link>
        <Link className="Link"to='/about'><h3>about</h3></Link>
        <Link className="Link"to='/login'><h3>login</h3></Link>
        </div>
    )
}
export default Navbar;