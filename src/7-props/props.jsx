// ?What is Props?
// Props (short for "properties") are like function parameters. They allow you to pass data from one component to another (typically from parent to child).

function Pr(props){
    // console.log(props);
    
    return(

        <p>{props.NAME}</p>
        
    )
}
export default Pr

// You can also use destructuring-->"{}". 
// you can also pass multiple props.
export function Dpr({Name ,Age,Email}) {
    return(
   <div>
    <h5>Destructuring /multiple props</h5>
    <p>{Name}</p>
    <p>{Age}</p>
    <p>{Email}</p>
   </div>

    )
    
}
//passing props as variable
export function Vpr(props) {
    return(
        <div>
           <h5>passing props as variable</h5>
            <p>{props.ADDR}</p>
        </div>
    )
    
}
// passing props as objects
        export function Opr({USER}) {
    
            return(
                <div>
                    <h5>passing props as objects</h5>
                    <p>{USER.Name}</p>
                    <p>{USER.Age}</p>
                    <p>{USER.Ph}</p>
                </div>
            )
            
        }
// pass array props
export function Apr({college}) {
    return(
        <div>
          
            <p>Colleges:{college}</p>
        </div>
    )
    
}
// Pass Props on Click (Dynamic Props)
export function Epr({ name }) {
  return( 
  <div>
    
      <p>Student Name: {name}</p>

  </div>
  )
}