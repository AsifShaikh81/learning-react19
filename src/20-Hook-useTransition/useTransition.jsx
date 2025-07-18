import { useTransition } from "react"

function UseTransition() {

const [isPending,startTransition] = useTransition();
const handelBtn = ()=>{
    startTransition(async ()=>{
        await new Promise(res=>setTimeout(res,2000));

    })
}
    return(
        <>
    
        {
            isPending?
            <img src="https://cdn.dribbble.com/userupload/24031440/file/original-09559e5c3ffd3116a53cc071716e4d88.gif" alt="" />
            :null
        }
        <button  disabled={isPending} onClick={handelBtn} >Click</button>
        </>
    )
}
export default UseTransition;