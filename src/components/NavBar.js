import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <header className="header">
            <div className="navbar__wrapper container">
                <nav className="navbar d-flex justify-content-start">
                    <NavLink className="navbar__link" to="/" exact>Flav</NavLink>
                    <NavLink className="navbar__link" to="/about">About</NavLink>
                    <NavLink className="navbar__link" to="/posts">Posts</NavLink>
                    <NavLink className="navbar__link" to="/projects">Projects</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar