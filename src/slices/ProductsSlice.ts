import { createSlice } from "@reduxjs/toolkit"
import { addInventory, listProductsAsync, newProduct, searchProductsAsync, setInventory } from "../actions/ProductsActions"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { RootState } from "../store/store"

export interface ProductsState {
    product: Products;
    products: Products[];
    inventory: Inventory;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:ProductsState = {
    product: new Products(0, '', '', 'teaImage', 'teaListImage', 0, 0, 0, 0),
    products: [new Products(0, '', '', 'teaImage', 'teaListImage', 0, 0, 0, 0)],
    inventory: new Inventory(0, 0),
    status: 'idle'
}

const productsSlices = createSlice({
    name: 'products',
    initialState,
    reducers:{
        newProductAction: (state) => {state.product = newProduct(state.product).payload},
        addInventoryAction: (state) => {state.product.productStockAmt += addInventory(state.inventory).payload.change_amount},
        setInventoryAction: (state) => {state.product.productStockAmt = setInventory(state.inventory).payload.change_amount}
    },
    extraReducers:(builder) => {
        builder
            .addCase(searchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProductsAsync.fulfilled, (state, action) => {
                state.product = action.payload || initialState.product;
                state.status = 'idle';
            })
            .addCase(searchProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(listProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listProductsAsync.fulfilled, (state, action) => {
                state.products = action.payload || initialState.products;
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
