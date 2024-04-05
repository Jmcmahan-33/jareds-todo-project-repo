import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider({ children }) {



    useEffect(() => {
        fetch("/me")
            // makes a request to the me route to get data from user. 
            .then(res => res.json()) //converts the response to json
            .then(data => {
                if (data.errors) {
                    console.log(data.errors)
                } else {
                    console.log(data)
                }
            })
    })
    //  I want to set up user state. 
    // to use with  the data I get back from the server.
    // if its not the user, set the error message.
    // other wise set the user to the data.

    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }