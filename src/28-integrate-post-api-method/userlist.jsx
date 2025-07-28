import { useEffect, useState } from "react"
import { Routes,Route, NavLink } from "react-router";
import UserAdd from "./useradd";

function Userlist() {
    
   
   const[data, setData]= useState([]);
   useEffect(()=>{
    GetApi()
   },[])
    async function GetApi() {
       
       const url = 'http://localhost:3000/user'
       let response = await fetch(url,)
       response = await response.json()
       setData(response)
       console.log(data);
    }
    
    
    
    
    return (
        <>
        <NavLink to="/add"> Add user</NavLink>
        <br />
        <br />
        <NavLink to="/">Back</NavLink>
    <Routes>
        <Route path='/add' element={<UserAdd/>} />
    </Routes>
        {
         data.map(x=>(
            <ul key={x.id} className="user-list">

                <li>{x.id}</li>
                <li>{x.name}</li>
                <li>{x.age}</li>
                <li>{x.email}</li>
            </ul>
         ))
        }
        </>
    )
}

export default Userlist;