import asif from 'styled-components'
export function StlComponent() {


    // let Heading = asif.h1`
    // color:green;
    // border: 1px solid white;
    // margin:10px;
    // padding:10px;
    // border-radius:20px
    // `

    //another way to apply style, using object inside a function 
    let Heading = asif.h1({
    color:'green',
    border: '1px solid white',
    margin:'10px',
    padding:'10px',
    borderRadius:'20px'
    })
    
    return (
    <>
     <Heading>hello </Heading>
     <Heading>hello 2  </Heading>
     <Heading>hello 3</Heading>
     <Heading>hello 4</Heading>
    </>
    )
}