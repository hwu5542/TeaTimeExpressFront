import React from "react";
import { Route, Switch } from "react-router-dom"
import { ProductPage } from "../components/ProductPage";
import { ProductPage2 } from "../components/ProductPage2";
import ShoppingPage from "../components/ShoppingPage";
import SignUp from "../components/SignUp";

const AppRoutes:React.FC<unknown> = (props) => {
    return(
        <Switch>
            <Route exact path='/' component = {SignUp}/>

            <Route exact path='/shopping' component = {ShoppingPage}/>

            <Route exact path='/products' component = {ProductPage}/>
            
            <Route exact path='/products2' component = {ProductPage2}/>

            <Route exact path='/login' render={() => {return <p>blar</p>}}/>
        </Switch>
    )
}

export default AppRoutes