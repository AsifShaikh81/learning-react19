import {Routes,Route } from "react-router"
import Home1 from "./home"
import About1 from './about'
import Register1 from './register'
import College1 from './college'
import { Navbar1 } from "./navbar."
import {Student} from './student'
import {Department} from './department'
import { UserList } from "./Dynamic-route/UserList"
import { UserDetails } from "./Dynamic-route/UserDetails"

//ye sab mene learn kiya hai 
//nested,layout,index,dynamic,segment-route

export function NestedRoute() {
    return (
        <>
       

        <Routes>
 {/* Here home1 ,about1, register1 ,user ,UserList, UserDetails components wrap inside "Navbar1" component so navbar only visible inside this component -----> layout route */}
          <Route element={<Navbar1/>}>
            <Route path="/" element={<Home1/>}/>
            <Route path="/About1" element={<About1/>}/>
            <Route path="/Register1" element={<Register1/>}/>
            {/* Dynamic route */}
            <Route path="/user/list?" element={<UserList/>}/>   {/* static optional segmant "list?" */}
            <Route path="/user/:id/:name?" element={<UserDetails/>}/>  {/* dynamic optional segmant "name?" */}

            {/* Dynamic route */}

          </Route>
   

          
           
            {/* nested route */}
             <Route path="/College1" element={<College1/>}>
               <Route index element={<Student/>}/>  {/* index ---> by default it will show student component content  */}
               <Route path="Department" element={<Department/>}/> 
            </Route>
            {/* nested route */}
               
            
        </Routes>
        </>
    )
}

//element ---> insert component
//path ----> specify a path where u want to show that particular component
//to ----> "to" and "path" should be same 
//outlet --- > this componet imported in the parent component to show child component content {here college is parent component} 
// Nested route should be always in self closing 