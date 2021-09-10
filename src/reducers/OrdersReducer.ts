import { Reducer } from "react";
import { OrdersAction, OrdersActionTypes } from "../action-mappers/Orders-mapper";
import { Orders } from "../models/Orders";

const initialOrder = new Orders(0, 0, 0, 0, 0, "");

const ordersReducer:Reducer<Orders, OrdersAction> = (preState = initialOrder, action) => {
    switch(action.type) {
        case OrdersActionTypes.NEW_ORDER:
            return action.payload||initialOrder;
        case OrdersActionTypes.CANCEL_ORDER:
            return initialOrder;
        case OrdersActionTypes.DELETE_ORDER:
            return initialOrder;
    }
}

export default ordersReducer;