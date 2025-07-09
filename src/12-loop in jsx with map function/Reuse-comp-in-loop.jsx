//this component used in map.jsx component
const Rcil = ({Data}) => {
  return (
    <div style={{
        border: "solid 1px white",
        padding:"10px",
        margin: "10px",
        borderRadius: "5px",
    }}>
     
      <p> Name: <span style={{color:"green"}}>{Data.name}</span></p>
      <p> Age: <span style={{color:"green"}}>{Data.age}</span></p>
      <p> Email: <span style={{color:"green"}}>{Data.email}</span></p>
      
      
    </div>
  );
};

export default Rcil;