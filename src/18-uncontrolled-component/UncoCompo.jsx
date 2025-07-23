export  function UnComponent() {
         function handel(event) {
            event.preventDefault() // ---> this prevent from loading after submit
           const user = document.querySelector('#userName').value
           const pass = document.querySelector('#userPass').value
           console.log(user, pass);
           
            
        }
    
    return(
   
        <>
        <form action="">
            <p>uncontrolled component with dom </p>
            <input type="text" id="userName" placeholder="enter name" />
            <br />
            <br />  
            <input type="password" id="userPass" placeholder="enter password" />
            <br />
            <br />
            <button onClick={handel}>Submit</button>
        </form>
        </>
    )
}