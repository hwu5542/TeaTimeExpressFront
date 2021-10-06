import React from "react";
import { Route, Switch } from "react-router-dom"
import ProductPage from "../components/ProductPage";
import ShoppingPage from "../components/ShoppingPage";
import SignUp from "../components/SignUp";

const AppRoutes:React.FC<unknown> = (props) => {
    return(
        <Switch>
            <Route exact path='/' component = {SignUp}/>

            <Route exact path='/shopping' component = {ShoppingPage}/>

            <Route path='/products/:productid' render = {() => {return <ProductPage/>}}/>
        </Switch>
    )
}

export default AppRoutes