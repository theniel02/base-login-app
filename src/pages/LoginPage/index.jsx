import axios from "axios";
import React from "react";
import { useState } from "react";

import './LoginPage.css'



export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [data, setData] = useState('');
    const [token, setToken] = useState('');

    function auth () {
        console.log("AUTH")
        console.log(email)
        console.log(pass)
        axios.post('http://localhost:3333/api/login', { email: email, password: pass})
        .then((response) => {
            console.log(response.data)
            setData("Logado com sucesso!")
            setToken("TOKEN: "+response.data.token)
        })
        .catch(err => {
            console.log(err)
            setData("Falha ao fazer login!")
            setToken("")
        })
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder='youremail@email.com' value={email} onChange={event => {setEmail(event.target.value);}}/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input id="pass" type="password" placeholder='Your password' value={pass} onChange={event => {setPass(event.target.value);}}/>
            </div>
            
            <button onClick={auth}>Login</button>
            <div><h1>{data}</h1></div>
            <p>{token}</p>
        </div>
    )
}