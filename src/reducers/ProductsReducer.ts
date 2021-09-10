import { Reducer } from "react";
import { ProductsAction, ProductsActionTypes } from "../action-mappers/Products-mapper";
import { Inventory } from "../models/Inventory";
import { Products } from "../models/Products";

const initialState = new Products(0, "", 0, "", 0, 0, "");
const initialInvent = new Inventory(0, 0);

const productsReducer: Reducer<Products, ProductsAction> = (preState = initialState, action) => {
    let temp:Inventory;
    
    switch (action.type) {
        case ProductsActionTypes.NEW_PRODUCT:
            return action.payload||initialState;
        case ProductsActionTypes.GET_PRODUCT:
            temp = action.payload || initialInvent;
            preState.product_stock_amt -= temp.change_amount;
            return  preState||initialState;
        case ProductsActionTypes.ADD_INVENT:
            temp = action.payload || initialInvent;
            preState.product_stock_amt += temp.change_amount;
            return  preState|| initialState ;
        case ProductsActionTypes.SET_INVENT:
            temp = action.payload || initialInvent;
            preState.product_stock_amt += temp.change_amount;
            return  preState|| initialState;
    }
}

export default productsReducer;