import React from 'react';
import { Link } from "react-router-dom";
const HomePage = ()=>{
    return (<div className="home">
                <h1>Welcome To Beer Page</h1>
                <p><Link to="/beer">learn about beer</Link></p>
            </div>)
}

export default HomePage;