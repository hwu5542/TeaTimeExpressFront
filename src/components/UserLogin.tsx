import React, { useState } from "react";
import { loginAsync } from "../actions/UsersActions";
import { useAppDispatch } from "../store/hook";

export const UserLogin: React.FC<unknown> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useAppDispatch();

    const loginValidate = async (event: { preventDefault: () => void; }) => { 
      event.preventDefault();
      
      dispatch(loginAsync({username, password}));
      
    }
    
    return (
        <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown login-dropdown">
                <button id="loginNavbarAnchor" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle"><i className="fa fa-user-o">Login</i></button>
                <div id="loginNavbarMenu" className="dropdown-menu">
                    <form className="form-inline login-form" onSubmit={loginValidate}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="user-username" placeholder="username" required />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="user-password" placeholder="password" autoComplete="on" required />
                        </div>
                        <button id="btn-login" type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}