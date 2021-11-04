import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { listProductsAsync,  setProduct, updateProductsAsync } from "../actions/ProductsActions"
import { emptyProduct, Products } from "../models/Products"
import { RootState } from "../store/store"

export interface ProductsState {
    product: string;
    productsList: string[];
    status: 'idle' | 'loading' | 'failed';
}


const initialState:ProductsState = {
    product: JSON.stringify(emptyProduct),
    productsList: [JSON.stringify(emptyProduct)],
    status: 'idle'
}

const updateProductsList = (pList:Products[]) => {
    let prodList = new Array(pList.length)
    let index = 0;
    
    for (let product of pList) {
        prodList[index++] = JSON.stringify(product);
    }

    return prodList;
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        updateProductsAction: (state, action:PayloadAction<Products[]>) => {state.productsList = updateProductsList(action.payload);},
        setProductAction: (state, action:PayloadAction<number>) => {state.product = setProduct(state.productsList, action.payload).payload},
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
                if (action.payload) state.productsList = updateProductsList(action.payload);
                else state.productsList = initialState.productsList;
                state.status = 'idle';
            })
            .addCase(listProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(updateProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProductsAsync.fulfilled, (state, action) => {
                if (action.payload) state.productsList = updateProductsList(action.payload);
                else state.productsList = initialState.productsList;
                state.status = 'idle';
            })
            .addCase(updateProductsAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { updateProductsAction, setProductAction } = productsSlice.actions;

export const selectProducts = (state:RootState) => state.products.productsList;

export const selectProduct = (state:RootState) => state.products.product;

export default productsSlice.reducer;
