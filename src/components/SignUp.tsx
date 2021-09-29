import React, { useState } from "react";
import { loginCustomerAsync, signUpAsync } from "../actionMappers/UsersMapper";
import { useAppDispatch } from "../store/hook";

const SignUp:React.FC<unknown> = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useAppDispatch();

    const SignUpValidate = async (event: { preventDefault: () => void; }) => { 
      event.preventDefault();
      
      dispatch(signUpAsync({username, password}));
    }

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-justify text-lg-start" id="pageFrontContainer">
              <h1 className="display-4 fw-bold lh-1 mb-3">Tea Time Express</h1>
              <p className="col-lg-10 fs-4">Welcome to Tea Time Express. The TTE will provide you a safe online shopping experience.</p>
              <p className="col-lg-10 fs-4" id="registerPrompt">New customer can sign up here.</p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5" id="signUpForm">
              <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={SignUpValidate}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingUsername" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                  <label htmlFor="floatingUsername">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" autoComplete="on" placeholder="Password" onChange = {e => setPassword(e.target.value)}/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button id="signUpButton" className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <hr className="my-4"/>
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
              </form>
            </div>
          </div>
        </div>
    )
}

export default SignUp