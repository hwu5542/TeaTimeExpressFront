import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css"
import { UserLogin } from "./UserLogin";

const Navbar:React.FC<unknown> = (props) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Tea Time<b>Express</b></Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <div className="nav-item dropdown" id="servicesPlaceHolder">

                </div>

                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to='/Shopping'>Shopping</NavLink>
                </div>
                <form className="navbar-form form-inline search-form" id="searchPlaceHolder">
                </form>
                <UserLogin/>
            </div>

        </nav>
    )
}

export default Navbar;