import axios from 'axios';
import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();


    const handleAddUser = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {
            name: name,
            email: email
        }




        // fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // }).then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('User Added Succesfully');
        //             e.target.reset();
        //         }
        //     })

        //using axios
        axios.post('http://localhost:5000/users', {
            name: name,
            email: email
        })
            .then(res => {
                console.log(res)
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
            })


    }






    return (
        <div>
            <h2>This is Add User</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;