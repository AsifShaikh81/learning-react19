import { Cp } from "./Collprop";
// import { Studentprop } from "./student";
function Nl() {
    const collegeData = [{
        Cname: "iit",
        Ccity: "mumbai",
        Cwebsite: "www.iit.com",
        student: [{
            name: "asif",
            age: "22",

        },
        {
            name: "peter",
            age: "25",
        },
        {
            name: "bruce",
            age: "30",
        }
        ]
    },
    {
        Cname: "iit",
        Ccity: "Delhi",
        Cwebsite: "www.iitdelhi.com",
        student: [{
            name: "sam",
            age: "22"
        },
        {
            name: "anil",
            age: "23"
        }
        ]
    }

    ]


    return (
        <div>
            {collegeData.map((x, index) => (
                <div key={index}>
                    <Cp CollegeData={x}></Cp>
                </div>
            ))}
         
       
         
        </div>
    )
}
export default Nl;