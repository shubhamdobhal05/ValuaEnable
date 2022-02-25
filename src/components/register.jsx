import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";


const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, number, email, password, reEnterPassword} = user;
        if(name && number && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:3002/register", user)
            .then(res => {
                console.log(res)
            })
        } else {
            alert("Please check your details")
        }
        
    }
    return (
        <div className="register">
           <h1>Register</h1>
           <input type = "text" name = "name" value = {user.name} onChange= {handleChange} placeholder="Enter your Name"/>
           <input type= "number" name = "number" value = {user.number} onChange= {handleChange} placeholder="Enter your Number"/>
           <input type = "text" name = "email" value = {user.email} onChange= {handleChange} placeholder="Enter your Email"/>
           <input type= "password" name = "password" value = {user.password} onChange= {handleChange} placeholder="Enter your Password"/>
           <input type= "password" name = "reEnterPassword" value = {user.reEnterPassword} onChange= {handleChange} placeholder="Re-Enter your Password"/>
           <div className="button" onClick={register}>
               Register
           </div>
           <div>OR
           </div>
           <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
    )
}

export default Register;