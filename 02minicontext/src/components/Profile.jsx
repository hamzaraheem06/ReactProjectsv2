import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext)
    if(!user) 
        return (<div>Please Login First</div>)
    else 
        return (<div>Welcome, {user.username}</div>)
}