
const Form = () => {
    const handelFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = e.target.name.value
        const email = e.target.email.value
        const user = {name, email}

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('users added successfully')
                form.reset();
            }
        })
    }
    return (
        <div>
            <form onSubmit={handelFormSubmit}>
               <input type="text" name="name" placeholder="name here"/> <br />
               <input type="email" name="email" placeholder="email here"/> <br />
               <button type="submit">submit now</button>
            </form>
        </div>
    );
};

export default Form;