
import React from "react";
const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const user = {
        name: 'Olivia Rhye',
        email: 'olivia@untitledui.com'
       
 };
    return <UserContext.Provider value= {user}>
        {children}
    </UserContext.Provider>
};

export {UserContext,UserProvider}; 