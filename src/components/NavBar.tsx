import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css"
import { Users } from "../models/Users";
import { selectUser } from "../slices/UserSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";
import { UserLogin } from "./UserLogin";

const Navbar: React.FC<unknown> = (props) => {
    const dispatch = useAppDispatch();

    const storeCred = UseAppSelector(selectUser);

    let userCred: Users = JSON.parse(storeCred);

    useEffect(() => { userCred = (JSON.parse(storeCred)) }, [dispatch])

    const adminServices = () => (userCred.userId == 1 ?
        <div className="nav-item dropdown">
            <button className="nav-item nav-link dropdown-toggle btn btn-text" data-toggle="dropdown">Admin Services</button>
            <div className="dropdown-menu">
                <NavLink className='nav-item nav-link' to='/accounts'>Accounts</NavLink>
                <NavLink className='nav-item nav-link' to='/orders'>Orders</NavLink>
                <NavLink className='nav-item nav-link' to='/inventory'>Inventory</NavLink>
            </div>
        </div>
        : <div></div>)

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Tea Time<b>Express</b></Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to='/shopping'>Shopping</NavLink>
                    {adminServices()}
                </div>

                <UserLogin />
            </div>

        </nav>
    )
}

export default Navbar;