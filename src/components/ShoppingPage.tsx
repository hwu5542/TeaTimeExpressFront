import React from "react";
import { useAppDispatch, UseAppSelector } from '../store/hook';
import { selectProducts } from '../slices/ProductsSlice';
import { listProductsAsync } from '../actions/ProductsActions';
import { Products } from '../models/Products';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const ShoppingPage: React.FC = () => {

  const productsListStr: string[] = UseAppSelector(selectProducts).products;

  let productsList: Products[] = new Array(productsListStr.length);

  let index = 0;

  for (let productStr of productsListStr) {
    productsList[index++] = JSON.parse(productStr);
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listProductsAsync())
  }, [dispatch]);

  const ShoppingPageCardsContainer = () => (
    productsList.map(ShoppingPageCards));

  const ShoppingPageCards = (product: Products) => (
    <div className="col" key={product.productId}>
      <Link className='nav-item nav-link' to={'/products/' + product.productId}>
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundSize: 'cover', backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${product.productListImage}.jpg)`, backgroundRepeat: 'no-repeat' }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{product.productName}</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <small>Price   ${product.productPrice}</small>
              </li>

              <li className="d-flex align-items-center me-3">
                <small>Stock</small>
              </li>
              <li className="d-flex align-items-center">
                <small>{product.productStockAmt - product.productOrderAmt}</small>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )

  return (
    <div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Tea Products</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {ShoppingPageCardsContainer()}
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage;