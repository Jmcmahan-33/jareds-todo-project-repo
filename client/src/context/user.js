import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider({ children }) {
   



    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }