import { useState, createContext } from "react"
import  {ComponentB} from './componentB'


export const SendData = createContext();


export function ComponentA() {
    const [user, setUser] = useState('asif')
    return(
        <div style={{border:'1px solid white'}}>
            <SendData.Provider value={user}>
                <p>ComponentA </p>
                Hello, {user}
                <ComponentB/>
            </SendData.Provider>
            
        </div>
    )
}

//this is my provider component /sending data component 