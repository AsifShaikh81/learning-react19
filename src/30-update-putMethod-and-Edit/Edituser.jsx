import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function EditUser() {
   const[Nam,setNam]= useState("")
    const[Ag,setAg]= useState("")
    const[Emai,setEmai]= useState("")

    const {id} = useParams(); //use variable same as dynamic route
    const url =  "http://localhost:3000/user/"+id
    const navigate = useNavigate()

    useEffect(()=>{
     getUser();
},[])
    
    const getUser = async()=>{
       let response = await fetch(url)
       response = await response.json()
       console.log(response);
       
       setNam(response.name);
       setAg(response.age);
       setEmai(response.email);

    }
    
   //  getUser();// calling here to automatically reload 
     //update data
    const UpdateData =async ()=>{
      let response =  await fetch(url,{
         method:'Put',
         body: JSON.stringify({
  name: Nam,
  age: Ag,
  email: Emai
}),
headers: {
  "Content-Type": "application/json"
}

      });
      response = await response.json();
      console.log(response);
      
      if (response) {
         alert("data updated");
         navigate("/"); // go back to user list
         
      }
    } 
    
    return(
    <>
    <p>Edit user details</p>
    <label htmlFor="Nam">Nam: </label>
    <input type="text"  id="Nam" value={Nam} placeholder="enter Nam"  onChange={(e)=>setNam(e.target.value)}/>
    <br />
    <br />
    <label htmlFor="Ag">Ag: </label>
    <input type="text"  id="Ag"  value={Ag} placeholder="enter Ag"  onChange={(e)=>setAg(e.target.value)}/>
    <br />
    <br />
    <label htmlFor="Emai">Emai: </label>
    <input type="Emai"  id="Emai" value={Emai} placeholder="enter Emai"  onChange={(e)=>setEmai(e.target.value)}/>
    <br />
    <br />
    <button onClick={UpdateData}>Update User </button>
    
    </>
    )
}

export default EditUser;