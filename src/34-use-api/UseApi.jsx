import {Suspense, use} from 'react';


const dataPromise = fetch('https://dummyjson.com/users').then((response)=>(response.json()))


function UseApi() {
    const user = use(dataPromise) // automatically store and unwrap data from api and make easy to get api 
    console.log(user);
    
    return (
        <div>
    <p>UseApi</p>
    {/* <p>firstName: {user.users[0].firstName}</p>
    <p>Age: {user.users[0].age}</p> */}
    
    {/* looping through entire data and printing firstname and age */}
    {
        user && user.users.map((x)=>(
            <ul key={x.id}  style={{listStyleType:'none'}}>
                <li>firstName: {x.firstName}</li>
                <li>Age: {x.age}</li>
            </ul>
        ))
    }

    </div>
  )
}

export default UseApi

// -------defining component for suspense------------

export function Sus() {
  return (
    <div>
     <Suspense fallback={<h1>Loading....</h1>}>
        <UseApi/>
     </Suspense>
    </div>
  )
}
