import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { addInventory, listProductsAsync, newProduct, setInventory, setProduct } from "../actions/ProductsActions"
import { Inventory } from "../models/Inventory"
import { emptyProduct } from "../models/Products"
import { RootState } from "../store/store"

export interface ProductsState {
    product: string;
    products: string[];
    inventory: string;
    status: 'idle' | 'loading' | 'failed';
}


const initialState:ProductsState = {
    product: JSON.stringify(emptyProduct),
    products: [JSON.stringify(emptyProduct)],
    inventory: JSON.stringify(new Inventory(0, 0)),
    status: 'idle'
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        newProductAction: (state) => {state.product = JSON.stringify(newProduct(JSON.parse(state.product)).payload)},
        setProductAction: (state, action:PayloadAction<number>) => {state.product = setProduct(state.products, action.payload).payload},
        addInventoryAction: (state) => {state.product = JSON.stringify(JSON.parse(state.product).productStockAmt + addInventory(JSON.parse(state.inventory)).payload.change_amount)},
        setInventoryAction: (state) => {state.product = JSON.stringify(JSON.parse(state.product).productStockAmt + setInventory(JSON.parse(state.inventory)).payload.change_amount)}
    },
    extraReducers:(builder) => {
        builder
            // .addCase(searchProductsAsync.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(searchProductsAsync.fulfilled, (state, action) => {
            //     state.product = JSON.stringify(action.payload) || initialState.product;
            //     state.status = 'idle';
            // })
            // .addCase(searchProductsAsync.rejected, (state) => {
            //     state.status = 'failed';
            // })

            .addCase(listProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listProductsAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    let productsList = new Array(action.payload.length)
                    let index = 0;
                    
                    for (let product of action.payload) {
                        productsList[index++] = JSON.stringify(product);
                    }

                    state.products = productsList;
                } else {
                    state.products = initialState.products;
                }

                state.status = 'idle';
            })
            .addCase(listProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { newProductAction, setProductAction, addInventoryAction, setInventoryAction } = productsSlice.actions;

export const selectProducts = (state:RootState) => state.products.products;

export const selectProduct = (state:RootState) => state.products.product;

export default productsSlice.reducer;
