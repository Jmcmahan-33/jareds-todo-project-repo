import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
function Signup () {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
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
                <button type="submit">Signup</button>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup;