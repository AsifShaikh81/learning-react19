import { NavLink } from "react-router";
import './nav-style.css'
function Navbar() {
    return (
        <div className="Navbar">
        <NavLink className={(isActive)=>isActive?'custom-active Link':'Link'}to='/'><h3>home</h3></NavLink>
        <NavLink className="Link"to='/about'><h3>about</h3></NavLink>
        <NavLink className="Link"to='/login'><h3>login</h3></NavLink>
        </div>
    )
}
export default Navbar;