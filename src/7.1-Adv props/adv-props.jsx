function Defpara({name = "New user"}) {
    return(
        <div>
            
            <p>Hi, {name}</p>
        </div>
    )
}

export default Defpara

export function Pjwp({children}) {
    return (
        <div style={{color:"green", border:"solid 1px white", margin:"10px"}}>
             {/* cannot use html element directly inside component so passing it as a props */}
            {children}
           
        </div>
    )
}

export function Cswp ({color = "red"}) {
    return(
        //   passing stylw with props as well as using default param for color: "color = red"
        <div style={{color:color}}>
            <p> i am color</p>
        </div>
    )
    
}