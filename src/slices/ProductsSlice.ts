import { createSlice } from "@reduxjs/toolkit"
import { addInventory, listProductsAsync, newProduct, searchProductsAsync, setInventory } from "../actions/ProductsActions"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { RootState } from "../store/store"

export interface ProductsState {
    product: string;
    products: string;
    inventory: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:ProductsState = {
    product: JSON.stringify(new Products(0, '', '', 'teaImage', 'teaListImage', 0, 0, 0, 0)),
    products: JSON.stringify([new Products(0, '', '', 'teaImage', 'teaListImage', 0, 0, 0, 0)]),
    inventory: JSON.stringify(new Inventory(0, 0)),
    status: 'idle'
}

const productsSlices = createSlice({
    name: 'products',
    initialState,
    reducers:{
        newProductAction: (state) => {state.product = JSON.stringify(newProduct(JSON.parse(state.product)).payload)},
        addInventoryAction: (state) => {state.product = JSON.stringify(JSON.parse(state.product).productStockAmt + addInventory(JSON.parse(state.inventory)).payload.change_amount)},
        setInventoryAction: (state) => {state.product = JSON.stringify(JSON.parse(state.product).productStockAmt + setInventory(JSON.parse(state.inventory)).payload.change_amount)}
    },
    extraReducers:(builder) => {
        builder
            .addCase(searchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProductsAsync.fulfilled, (state, action) => {
                state.product = JSON.stringify(action.payload) || initialState.product;
                state.status = 'idle';
            })
            .addCase(searchProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(listProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listProductsAsync.fulfilled, (state, action) => {
                state.products = JSON.stringify(action.payload) || initialState.products;
                state.status = 'idle';
            })
            .addCase(listProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { newProductAction, addInventoryAction, setInventoryAction } = productsSlices.actions;

export const selectProducts = (state:RootState) => (state.products);

export default productsSlices.reducer;
