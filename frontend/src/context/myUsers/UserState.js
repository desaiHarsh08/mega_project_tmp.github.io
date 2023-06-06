import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props)=>{


    const host = "http://localhost:5000";

    const [user, setUser] = useState({});


    const [schemes, setSchemes] = useState(schemesInitial)


      //   Get schemes
    const getSchemes = async ()=>{
        // API Call
        const res = await fetch(`${host}/api/schemes/fetchallschemes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            }
        });
        const json = await res.json();
        // console.log(json)
        setSchemes(json);
        return schemes;
    }
   


      //   Create user
      const createUser = async (name, email, password)=>{
        // API Call
        const res = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await res.json();
        // console.log(json)
        setUser(json);
        return json.success
    }



    return (
        <UserContext.Provider value={{user, setUser, createUser, schemes, setSchemes, getSchemes }} >
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;