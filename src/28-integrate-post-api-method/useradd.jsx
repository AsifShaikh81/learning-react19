import { useState } from "react";

function UserAdd(params) {


    
    const[name,setName]= useState()
    const[age,setAge]= useState()
    const[email,setEmail]= useState()
    
    
     
        
        async function PostApi() {
        console.log(name,age,email);
        const url = "http://localhost:3000/user"
        let response = await fetch(url,{
            method:'Post',
            body: JSON.stringify({name,age,email})
        })
        response = await response.json()
        if (response) {
            alert('user added')
        }
    }
    

    return(
        <>
    <p>add user</p>
    <label htmlFor="name">Name: </label>
    <input type="text"  id="name"  placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
    <br />
    <br />
    <label htmlFor="Age">Age: </label>
    <input type="text"  id="Age" placeholder="enter Age" onChange={(e)=>setAge(e.target.value)} />
    <br />
    <br />
    <label htmlFor="Email">Email: </label>
    <input type="email"  id="Email" placeholder="enter Email" onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <br />
    <button onClick={PostApi}>Add user</button>
    
    </>
)    
}
export default UserAdd;
