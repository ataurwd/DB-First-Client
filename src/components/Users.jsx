import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const userData = useLoaderData()
    const [user, setUser] = useState(userData)
    const manageDeleteFunc = (_id) => {
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('deleted susseffi;;')
                const remaining = user.filter(item => item._id !== _id);
                setUser(remaining)
            }
        })
    }
    return (
        <div>
            data length: {user.length}
            {
                user.map(user => 
                    <div key={user._id}>
                        <h3>{user.email} <button onClick={() => manageDeleteFunc(user._id)}>X</button>
                        <Link to={`/update/${user._id}`}>
                        updata Profile
                        </Link>
                         </h3>
                    </div>
                )
            }
        </div>
    );
};

export default Users;