import { useState } from "react";
export function St() {
const [fruit, setfruit] = useState("WaterMelon")
let handleFruit = ()=>{
  setfruit("Apple")    
}

return(
<div>
    <p>{fruit}</p>
    <button onClick={handleFruit}>Click to change fruit name</button>
</div>

)

    

}
//counter state
function Counter() {
    const [count,setcount] = useState(0)

    return(
        <div>
            <p>Counter:{count}</p>
            <button onClick={()=>setcount(count+1)}>Update Count</button>  
        </div>
    )
    
}
export default Counter

//reverse counter
export const Reverse = ()=>{

  const [Rcounter, setRcounter] = useState(10)
  return(
    <div>
        <p>Rcounter:{Rcounter}</p>
        <button onClick={()=>setRcounter(Rcounter-1)}>Reverse Count</button>

    </div>
  )



}