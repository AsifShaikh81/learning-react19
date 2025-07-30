import { useParams } from "react-router";

function UsePar() {
    const {fname,lname} = useParams() //always use variabl same as dynamic router
    return(
    <>
    <p>cc</p>
    <p>hello: {fname} {lname}</p>
    </>
    )
}
export default UsePar;