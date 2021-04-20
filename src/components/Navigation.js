import React from 'react'
import {useContext} from 'react';
import GameContext from "../context/GameContext";
import  {Link} from 'react-router-dom'




const Navigation = () => {
    const {userLogout} = useContext(GameContext);
    const {loginStatus} = useContext(GameContext);
    console.log(loginStatus);
    const logout = ()=>{
        userLogout();
    }
   // <li><a href="/loginPage"> login/signup</a></li>
    return (
        <>
        <div>
        <header>
        <nav>
        <ul>
            <li><Link to="/">Home </Link></li> 
            <li><Link to ="/profilePage"> Profile </Link></li>
            <li><Link to="/categoryPage"> Games</Link></li>
            {!loginStatus ? <li><a href="/loginPage">Login/SignUp </a></li> : <li><button type="button" onClick = {logout} className="btn  login-btn btn-primary" >Log Out</button></li>}
            <li><Link to ="">Contact </Link> </li>          

        </ul>
    </nav>
    </header>
        </div>
        <div>
        <nav>
        
        </nav>
    </div>
        </>
    )
}

export default Navigation
