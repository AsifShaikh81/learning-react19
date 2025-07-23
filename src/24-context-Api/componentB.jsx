import {ComponentC} from './componentC'

export function ComponentB() {
    return(
        <div style={{border:'1px solid white'}}>
            <p>Component B</p>
            <ComponentC/>
        </div>
    )
}