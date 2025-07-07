import { useState } from "react"

//toggle or hide n show in react
function Ex2() {
    const [display,setDisplay] = useState(true)

    return(
        <div>
            
            {display?<p>Asif</p>:null}
            <button onClick={()=>{setDisplay(!display)}}>Toggle</button>

        </div>
    )
    
}
export default Ex2