import React, { Fragment, useEffect } from "react";
import { listProductsAsync, updateProductsAsync } from "../actions/ProductsActions";
import { emptyProduct, Products } from "../models/Products";
import { selectProducts, updateProductsAction } from "../slices/ProductsSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

const InventoryPage: React.FC = () => {

    // const adminAccount: Users = JSON.parse(UseAppSelector(selectUser));

    let productsListStr: string[] = UseAppSelector(selectProducts);

    let productsList: Products[] = new Array(productsListStr.length);

    let index = 0;

    for (let productStr of productsListStr) {
        productsList[index++] = JSON.parse(productStr);
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
    }, [dispatch]);

    const commitChanges = () => {
        dispatch(updateProductsAsync(productsList));
    }

    const newProduct = () => {
        productsList.push(emptyProduct);

        dispatch(updateProductsAction(productsList));
    }

    const ProductsTable = () => (productsList.map(ProductsTableItem))

    const ProductsTableItem = (product: Products) => (
        <Fragment>
            <tr>
                <td>{product.productId}</td>
                <td><input type="text" className="form-control" defaultValue={product.productName} onChange={e=>{product.productName=e.target.value}}/></td>
                <td><input type="text" className="form-control" defaultValue={product.productWeight} onChange={e=>{product.productWeight = Number.parseInt(e.target.value)}}/></td>
                <td><input type="text" className="form-control" defaultValue={product.productPrice} onChange={e=>{product.productPrice=Number.parseInt(e.target.value)}}/></td>
                <td><input type="text" className="form-control" defaultValue={product.productOrderAmt} onChange={e=>{product.productOrderAmt=Number.parseInt(e.target.value)}}/></td>
                <td><input type="text" className="form-control" defaultValue={product.productStockAmt} onChange={e=>{product.productStockAmt=Number.parseInt(e.target.value)}}/></td>
                <td><input type="text" className="form-control" defaultValue={product.productDescription} onChange={e=>{product.productDescription=e.target.value}}/></td>
                <td><button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#editDetail"+product.productId} aria-expanded="false" aria-controls={"editDetail"+product.productId}>Edit</button></td>
            </tr>
            <tr className="collapse" id={"editDetail"+product.productId}>
                <td><input type="text" className="form-control" defaultValue={product.productListImage} onChange={e=>{product.productListImage=e.target.value}}/></td>
                {product.productImage.split(';').map((image: any) => (<td>{image}</td>))}
            </tr>
        </Fragment>
    )

    return (
        <table className="table">
            <thead>
                <tr>
                    <td><button type="button" className="btn btn-success" onClick={commitChanges}>Commit Changes</button></td>
                    <td><button type="button" className="btn btn-warning" onClick={newProduct}>New Product</button></td>
                </tr>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Ordered Amount</th>
                    <th scope="col">Stock Amount</th>
                    <th scope="col">Description</th>
                    <th scope="col">Images</th>
                </tr>
            </thead>
            <tbody>
                {ProductsTable()}
            </tbody>
        </table>
    )
}

export default InventoryPage;