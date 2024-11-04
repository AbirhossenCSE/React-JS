import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    // state --> data
    // State --> loader
    // use effect
    // fetch --> state set --> set state
    console.log(users);
    
    return (
        <div>
            <h2>Users: {users.length} </h2>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;