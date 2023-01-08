import React, { useState } from 'react'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password,
            age
        }
        fetch("http://localhost:8080/user/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Register</h1>
            <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type='text' placeholder='age' onChange={(e) => setAge(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register
