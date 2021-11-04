import React, { Fragment, useEffect } from "react";
import { listProductsAsync } from "../actions/ProductsActions";
import { Products } from "../models/Products";
import { selectProducts } from "../slices/ProductsSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

const InventoryPage: React.FC = () => {

    // const adminAccount: Users = JSON.parse(UseAppSelector(selectUser));

    const productsListStr: string[] = UseAppSelector(selectProducts);

    let productsList: Products[] = new Array(productsListStr.length);

    let index = 0;

    for (let productStr of productsListStr) {
        productsList[index++] = JSON.parse(productStr);
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
    }, [dispatch]);

    // const ProductsTable = () => {
    //     console.log(productsList);
    //     return (<div></div>)
    // }

    const ProductsTable = () => (productsList.map(ProductsTableItem))

    const ProductsTableItem = (product: Products) => (
        <Fragment>
            <tr>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productWeight}</td>
                <td>{product.productPrice}</td>
                <td>{product.productOrderAmt}</td>
                <td>{product.productStockAmt}</td>
                <td>{product.productDescription}</td>
                <td><button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#editDetail"+product.productId} aria-expanded="false" aria-controls={"editDetail"+product.productId}>Edit</button></td>
            </tr>
            <tr className="collapse" id={"editDetail"+product.productId}>
                <td>{product.productListImage}</td>
                {product.productImage.split(';').map((image: any) => (<td>{image}</td>))}
            </tr>
        </Fragment>
    )

    return (
        <table className="table">
            <thead>
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