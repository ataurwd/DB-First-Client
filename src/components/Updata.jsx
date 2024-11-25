import { useLoaderData } from "react-router-dom";

const Updata = () => {
    const loadedUser = useLoaderData()
    const handelFormUpdata = (e) => {
        e.preventDefault()
        const form = e.target
        const name = e.target.name.value
        const email = e.target.email.value
        const updatedUser = {name, email}

        fetch(`http://localhost:5000/user/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                form.reset()
                alert('successfully added update info')
            }
        })
    }
    return (
        <div>
            update user {loadedUser.name}
            <form onSubmit={handelFormUpdata}>
               <input type="text" name="name" 
               placeholder="name here"
               defaultValue={loadedUser?.name}
               /> <br />
               <input type="email" name="email" 
               placeholder="email here"
               defaultValue={loadedUser?.email}
               /> <br />
               <button type="submit">update now</button>
            </form>
        </div>
    );
};

export default Updata;