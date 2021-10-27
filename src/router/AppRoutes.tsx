import React from "react";
import { Route, Switch } from "react-router-dom"
import AccountsPage from "../components/AccountsPage";
import InventoryPage from "../components/InventoryPage";
import OrderPage from "../components/OrderPage";
import ProductPage from "../components/ProductPage";
import ProfilePage from "../components/ProfilePage";
import ShoppingPage from "../components/ShoppingPage";
import SignUp from "../components/SignUp";

const AppRoutes:React.FC<unknown> = (props) => {
    return(
        <Switch>
            <Route exact path='/' component = {SignUp}/>

            <Route exact path='/shopping' component = {ShoppingPage}/>

            <Route exact path='/profile' component = {ProfilePage}/>

            <Route exact path='/accounts' component = {AccountsPage}/>

            <Route exact path='/orders' component = {OrderPage}/>

            <Route exact path='/inventory' component = {InventoryPage}/>

            <Route path='/products/:productid' render = {() => {return <ProductPage/>}}/>
        </Switch>
    )
}

export default AppRoutes