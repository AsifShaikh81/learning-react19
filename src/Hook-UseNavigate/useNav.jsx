import { useNavigate,Route,Routes,NavLink } from "react-router";
import { UserNav } from "./user";



function NavigateHook() {
    const navigate = useNavigate();
   
    const handleClick = ()=>{
        navigate('/lasson')
    }
    
    return(
        <>
       
        <Routes>
            <Route path="/lasson" element={<UserNav/>}/>
        </Routes>
        <button onClick={handleClick}>click</button>

        </>
    )
}

export default  NavigateHook;

// https://reactrouter.com/api/hooks/useNavigate
//https://www.geeksforgeeks.org/reactjs/reactjs-usenavigate-hook/