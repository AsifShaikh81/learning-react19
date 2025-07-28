import { useEffect, useState } from "react";


export function Ijs() {
  const [user, setUser] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    getData();
    setLoading(true)
  }, []);

  async function getData() {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const result = await response.json();
    setUser(result); // ✅ 
    console.log(result);
    setLoading(false)
  }

  return (
    <>
      <h5>install and ntegrate Server API and Loader</h5>
    
    {
        !loading?
        user.map((x)=>(
            <ul key={x.id} className="user-list">
                <li>{x.name}</li>
                <li>{x.age}</li>
            </ul>
        ))
        :<h1>Data loading...</h1>
    }
    </>
  );
}
