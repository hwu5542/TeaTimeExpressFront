import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { loginAsync } from "../actions/UsersActions";
import { Users } from "../models/Users";
import { selectUsers } from "../slices/UserSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

export const UserLogin: React.FC<unknown> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const [redirectState, setRedirectState] = useState({ redirect: '' });

    const storeCred = UseAppSelector(selectUsers).profile;

    let userCred: Users = JSON.parse(storeCred);

    const loginValidate = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        dispatch(loginAsync({ username, password }));

        setRedirectState({ redirect: '/shopping' });
    }

    if (redirectState.redirect && userCred.userId > 0) {
        setRedirectState({ redirect: '' });

        return (
            <Redirect to={redirectState.redirect} />
        )
    } else if (userCred.userId > 0) {
        return (
            <div className="navbar-nav ml-auto nav-item dropdown text-end">
                <a className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="navbar-nav ml-auto nav-item dropdown login-dropdown">
                <button id="loginNavbarAnchor" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle"><i className="fa fa-user-o"> Login</i></button>
                <div id="loginNavbarMenu" className="dropdown-menu">
                    <form className="form-inline login-form" onSubmit={loginValidate}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="user-username" placeholder="username" required onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" id="user-password" placeholder="password" autoComplete="on" required onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button id="btn-login" type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}