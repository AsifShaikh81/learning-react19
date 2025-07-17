import { Navigate, Route,Routes } from "react-router";
import Home from './home'
import About from './about'
import Login from './login'
import Navbar from "./navbar";
import PNF from './PageNotFound'


function Rr() {
    return (
        <>
        <Navbar/>  {/* this compoment contains "Link" */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<PNF/>}/> {/* if user hit wrong link it will show this page and this route should be always at end */}
            
            {/* <Route path="/*" element={<Navigate to='/'/>}></Route> if user hit wrong link it will automatically redirect to home page Navigate ----> built in component that helps to navigate between pages */}
            
            

        </Routes>
        
        
        </>
    )
}

export default Rr;