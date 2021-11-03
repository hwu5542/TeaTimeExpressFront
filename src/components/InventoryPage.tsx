import React, { useEffect } from "react";
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

    const ProductsTableItem = (product:Products) => (
        <tr>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
            <td>{product.productWeight}</td>
            <td>{product.productPrice}</td>
            <td>{product.productOrderAmt}</td>
            <td>{product.productStockAmt}</td>
            <td>Edit</td>
        </tr>
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
                    <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
                {ProductsTable()}
            </tbody>
        </table>
    )
}

export default InventoryPage;