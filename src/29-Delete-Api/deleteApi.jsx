import { useEffect, useState } from "react"


function DeleteApi (){
    
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        getData()
    },[])
    //fetching data
    async function getData(params) {
        const url = 'http://localhost:3000/user'
        let response  = await fetch(url)
        response = await response.json()
        setData(response)
    }

    
    //delete api 
    const removeUser = async (id)=>{
        console.log(id);
        const url = 'http://localhost:3000/user'
        let response = await fetch(url+"/"+id,{
            method:'delete'
        })
        response = await response.json();
        if (response) {
            alert('record deleted')
            getData();// here calling func, bcz it will reflect ui immediatly after deleting record
        }

        


    }
    return (
       <>
       {
           data.map(x=>(
               <ul key={x.id} className="user-list">
                   <li>{x.id}</li>
                   <li>{x.name}</li>
                   <li>{x.age}</li>
                   <li>{x.email}</li>
                   <li><button onClick={()=>removeUser(x.id)}>Delete</button></li>
                   
               </ul>
           ))
       }
       </>
   )
}
 
   
    
    
export default DeleteApi