function ToDo() {
function callFun() {
    alert('Function Called')
}

return(
    <div>
        <h5>Asif' sToDO</h5>


        <img src="https://st5.depositphotos.com/1703608/69112/i/450/depositphotos_691120514-stock-photo-adorable-labrador-puppy-closeup-isolated.jpg" alt="Dog" className="photo" />


        <ul>
        <li>Invent new traffic light</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

     <button onClick={callFun}>Click Me</button>
    </div>
)


}
export default ToDo