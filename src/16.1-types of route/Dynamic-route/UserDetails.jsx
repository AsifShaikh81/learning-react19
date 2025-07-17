import { useParams } from "react-router"
import { Link } from "react-router"

export function UserDetails() {
    const data = useParams()
    console.log(data.id)
    return (
        <div>
            <h4>user details page</h4>
            <Link to='/user'>back to user page </Link>
            <p>user id:{data.id}</p>
        </div>
    )
}