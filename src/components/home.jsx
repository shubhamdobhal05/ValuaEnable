import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";


const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <h1>This is the homepage</h1>
            <div className="button" onClick={() => navigate('/login')}>LogOut</div>
        </div>
    )
}

export default Homepage;