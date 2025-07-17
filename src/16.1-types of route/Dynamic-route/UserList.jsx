import { Link } from "react-router"

export function UserList() {
    const userName = [
        {id:1, name:'john'},
        {id:2, name:'sam'},
        {id:3, name:'asif'},
    ]
    return (
        <div>
            <h4>dynamic route</h4>
            {
                userName.map((item)=>(
                    <div>
                        <p><Link to={'/user/'+item.id}> {item.name}</Link></p>
                    </div>
                ))
            }

             <h4>with name in url</h4>
            {
                userName.map((item)=>(
                    <div>
                        <p><Link to={'/user/'+item.id+"/"+item.name}> {item.name}</Link></p>
                    </div>
                ))
            }
        </div>



    )
    
}