import React from "react";
import { Route, Switch } from "react-router-dom"
import SignUp from "../components/SignUp";

const AppRoutes:React.FC<unknown> = (props) => {
    return(
        <Switch>
            <Route exact path='/' component = {SignUp}/>

            <Route exact path='/login' render={() => {return <p>blar</p>}}/>
        </Switch>
    )
}

export default AppRoutes