import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch("/me")
            // makes a request to the me route to get data from user. 
            .then(res => res.json()) //converts the response to json
            .then(data => {
                setUser(data)
                if (data.errors) {
                    console.log("ERRORS", data.errors)
                    setErrors(data.errors)
                    setLoggedIn(false)

                } else {
                    console.log(data)
                    setLoggedIn(true)
                }
            })
    }, [])
    //  I want to set up user state. 
    // to use with  the data I get back from the server.
    // if its not the user, set the error message.
    // other wise set the user to the data.

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        setErrors([])
    }
    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ login,signup,loggedIn, user, errors }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }