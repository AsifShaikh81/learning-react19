import asif from './nav.module.css'
import { NavLink,Outlet } from 'react-router'
export function Navbar1() {
    return (
       
      <div>
          <div className={asif.Navbar}>
        
        
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About1'>About</NavLink>
        <NavLink to='/Register1'>Register</NavLink>
        <NavLink to='/College1'>College</NavLink>
        <NavLink to='/user'>Users</NavLink>
        <NavLink to='user/list'>List</NavLink>
        
        
        </div>
        <Outlet/>
      </div>
        
       
    )
}