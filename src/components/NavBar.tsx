import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css"

const Navbar:React.FC<unknown> = (props) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Tea Time<b>Express</b></Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to='/login'>Log In</NavLink>
                </div>
                <div className="nav-item dropdown" id="servicesPlaceHolder">

                </div>
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to='/login'>Log Out</NavLink>
                </div>
                <form className="navbar-form form-inline search-form" id="searchPlaceHolder">
                </form>
                <div className="navbar-nav ml-auto">
                    <div className="nav-item dropdown login-dropdown">
                        <button id="loginNavbarAnchor" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle"><i className="fa fa-user-o">Login</i></button>
                        <div id="loginNavbarMenu" className="dropdown-menu">
                            <form className="form-inline login-form" method="get">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" id="user-username" placeholder="username" required/>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" id="user-password" placeholder="password" autoComplete="on" required/>
                                </div>
                                <button id="btn-login" type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;