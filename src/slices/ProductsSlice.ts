import { createSlice } from "@reduxjs/toolkit"
import { addInventory, getProduct, newProduct, setInventory } from "../actionMappers/ProductsMapper"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { RootState } from "../store/store"

export interface ProductsState {
    product: Products;
    inventory: Inventory;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:ProductsState = {
    product: new Products(0, "", 0, "", 0, 0, ""),
    inventory: new Inventory(0, 0),
    status: 'idle'
}

const productsSlices = createSlice({
    name: 'products',
    initialState,
    reducers:{
        newProductAction: (state) => {state.product = newProduct(state.product).payload},
        getProductAction: (state) => {state.product.product_order_amt += getProduct(state.inventory).payload.change_amount},
        addInventoryAction: (state) => {state.product.product_stock_amt += addInventory(state.inventory).payload.change_amount},
        setInventoryAction: (state) => {state.product.product_stock_amt = setInventory(state.inventory).payload.change_amount}
    },
    extraReducers:{},
})

export const { newProductAction, getProductAction, addInventoryAction, setInventoryAction } = productsSlices.actions;
export const selectProducts = (state:RootState) => (state.products);
export default productsSlices.reducer;
