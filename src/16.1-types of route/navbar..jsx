import asif from './nav.module.css'
import { NavLink,Outlet } from 'react-router'
export function Navbar1() {
    return (
       
      <div>
          <div className={asif.Navbar}>
        
        
        <NavLink className={asif.link} to='/'>Home</NavLink>
        <NavLink className={asif.link} to='/About1'>About</NavLink>
        <NavLink className={asif.link} to='/Register1'>Register</NavLink>
        <NavLink className={asif.link} to='/College1'>College</NavLink>
        <NavLink className={asif.link} to='/user'>Users</NavLink>
        <NavLink className={asif.link} to='user/list'>List</NavLink>
        
        
        </div>
        <Outlet/>
      </div>
        
       
    )
}