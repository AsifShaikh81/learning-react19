import { useContext } from "react"
import { SendData } from "./componentA"

import { ComponentD } from "./componentD"

export function ComponentC() {
      const value = useContext(SendData)
    return(
        <div style={{border:'1px solid white'}}>
            <p>Component C</p>
            hello again,{value}
            <ComponentD/>
        </div>
    )
}