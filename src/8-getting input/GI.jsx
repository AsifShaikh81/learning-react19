import { useState } from "react"

function Gin() {
    const [val,Setval] = useState();
    return(
        <div>

            <input type="text" onChange={(event)=>Setval(event.target.value)}  value={val} placeholder="enter name" />
            <p>hi, {val}</p>
            <button onClick={()=>Setval("")}>Clear</button>
        </div>
    )
    

}
export default Gin