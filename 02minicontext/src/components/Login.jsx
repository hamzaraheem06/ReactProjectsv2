import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter username"/>
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter password"/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}