import React, { useContext } from "react";
import Todos from "./Todos";
import Login from "./Login";
import Signup from "./Signup";
import { UserContext } from "./context/user";

function Home() {
const {loggedIn} = useContext(UserContext)

// if logged in, user will see their todos. 
// if not logged in, user will see the login and sign up page
if (loggedIn) {
    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome to your todos</h2>
            <Todos />
        </div>
    )
} else {
    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome to your todos</h2>
            <Login />
            <Signup />
        </div>
    )}
}

export default Home 