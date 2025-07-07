import { useState } from "react";

function Cr() {
    const [count,setCount] = useState(0)

    return(
        <div>
            <p>count:{count}</p>
            {
                count==0?<p>Condition 0</p>
                :count==1?<p>Condition 1</p>
                :count==2?<p>Condition 2</p>
                :count==3?<p>Condition 3</p>
                :count==4?<p>Condition 4</p>
                :count==5?<p>Condition 5</p>
                :<p>other condition</p>
            }
            <button onClick={()=>{setCount(count+1)}}>Conditional rendering</button>
        </div>

    )
    
}
export default Cr

//* How It Works:
// useState(0) creates a count state with an initial value of 0.
// The button increases the count value on each click.
// The JSX uses nested ternary operators to check multiple values of count.
// Based on the count, it conditionally renders different headings.