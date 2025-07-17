import { NavLink, Outlet } from "react-router";
function College1() {
    return (
    <div>
     <h3>College page</h3>
     <NavLink to='/'><h4>Go back to home</h4></NavLink>
     <NavLink to=''> student page </NavLink>  {/* here i didn't give path for student page cuz index is used */}
     <NavLink to='Department'> Department page </NavLink>
                                                                       
     <Outlet/>
     {/* outlet --- > this componet imported in the parent component to show child component content {here college is parent component}  */}
    </div>
    )
}

export default College1;