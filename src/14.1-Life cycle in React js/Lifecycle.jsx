import { useEffect, useState } from "react";

function Lc(params) {
    // --------states-----------------
    const [mount,SetMount] = useState(0);
    const [update,setUpdate] = useState(0);
    const [unmount,setUnmount] = useState(true);

    // --------states-----------------
   
    //--------functions-------------
    function Mount() {
        console.log("run on mount");
        
    }
    function Update() {
        console.log("run on update");
        
    }
    function Unmount() {
        console.log("run on unmount");
        
    }
    //--------functions-------------

    //1.mount - run only once on mount
    useEffect(()=>{
        Mount();
    },[])
    //2.update - run when updates
    useEffect(()=>{
        Update();
    },[update])
    //3.unmoun - run on unmount
    useEffect(()=>{
        return Unmount()
    },[])

    return(
        <div>
            <button onClick={()=>{SetMount(mount+1)}}>Mount:{mount}</button>
            <button onClick={()=>{setUpdate(update+1)}}>Update:{update}</button>
            <button onClick={()=>{setUnmount(!unmount)}}>Unmount</button>
            {unmount?<p>i will execute when unmount is clicked</p>:null}
        </div>
    )
}

export default Lc;