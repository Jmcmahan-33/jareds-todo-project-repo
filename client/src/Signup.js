import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
function Signup() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        // q: why do I get a 404 error when I try to sign up?
        // A: You are getting a 404 error because the server is not set up to handle a POST request to the /signup route.
        // Q: How do I fix the 404 error?
        // A: You need to set up the server to handle a POST request to the /signup route.
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => res.json())
            .then(user => {
                if (!user.errors) {
                    signup(user)

                } else {
                    setUserName("")
                    setPassword("")
                    const errorLis = user.errors.map(e => <li>{e}</li>)
                    setErrorsList(errorLis)
                }
            })
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    label="Username"
                    type="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    label="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup;