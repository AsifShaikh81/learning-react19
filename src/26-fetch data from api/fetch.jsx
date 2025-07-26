import { useEffect, useState } from "react";
import './style.css'

function Fdfa(params) {
  
const [userData, setUserData] = useState([]);

   useEffect(()=>{
    getUserData();
   },[])
   async function getUserData() {
     const url = "https://dummyjson.com/users";
     let response = await fetch(url)   // this is a promise 
     response = await response.json()  // this is a promise
     console.log(response);
    setUserData(response.users)
    
  }
  console.log(userData);  

    return(
      
      <>
      <p>aaa</p>
      <ul className="user-list">
        <li>first name</li>
        <li>last name</li>
        <li>  Email</li>
      
      </ul>
      

      {
         userData.map((x)=>(
          
         <ul key={x.id} className="user-list">
          <li >{x.firstName}</li>
          <li>{x.lastName}</li>
          <li>{x.email}</li>
         </ul>
       
         
         
         ))
        
      }
      
      </>
    )
    
}

export default Fdfa;