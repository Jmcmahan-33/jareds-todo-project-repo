import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";

function Login() {
    const { login } = useContext(UserContext)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    // I need to bring in user data and set the log in.

    // I need to submit with a post request to the server.
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then((user) => {
                if (!user.errors) {

                    login(user)
                } else {
                    setUserName("")
                    setPassword("")
                    const errorLis = user.errors.map(e => <li>{e}</li>)
                    setErrorsList(errorLis)

                }
            })

    }
    // setUserName is not a function
    // TypeError: setUserName is not a function
    //  why do I get this error?
    // 

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    placeholder="username"
                    value={username}
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Login;