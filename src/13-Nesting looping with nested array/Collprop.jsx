export function Cp({CollegeData}) {
    return (
        <div style={{ backgroundColor: "#ccc",
        padding: "20px",
        margin: "20px",
        borderBottom: "2px solid #000",
        borderRadius: "10px",
        color:"black"}}>

      <p>CollegeName: {CollegeData.Cname}</p>
      <p>City: {CollegeData.Ccity}</p>
      <p>Website: {CollegeData.Cwebsite}</p>
       <p>Students:</p>
            <ul style={{ listStyleType: "circle", textAlign: "left", marginLeft: "40px" }}>
                {CollegeData.student.map((std, idx) => (
                    <li key={idx}>Name: {std.name}, Age: {std.age}</li>
                ))}
            </ul>
        </div>
    )
    
}