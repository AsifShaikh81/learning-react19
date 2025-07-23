import { useContext } from "react"
import { SendData } from "./componentA"

export function ComponentD() {
    const value = useContext(SendData)
    return(
        <div style={{border:'1px solid white'}}>
            <p>Component D</p>
            <p>{`Bye ${value}`}</p>
        </div>
    )
}
//this is my consumer component /receiving data component 