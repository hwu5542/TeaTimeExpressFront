import catImage from '../images/catImage.jpg'
import React from "react";
import { useAppDispatch, UseAppSelector } from '../store/hook';
import { selectProducts } from '../slices/ProductsSlice';
import { Products } from '../models/Products';
import { listProductsAsync } from '../actions/ProductsActions';

const ShoppingPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const productsList = UseAppSelector(selectProducts).products;

  const ShoppingPageCardsContainer = async () => {
    dispatch(listProductsAsync());

    console.log(productsList);

    //async parts
    // const dispatch = useAppDispatch();

    // dispatch(searchProductsAsync(1));
    
    

    // return productsList.map(ShoppingPageCards);

    // for (let singleProduct of productsList) {
    //   allCards[index] = ShoppingPageCards(singleProduct);
    // }

    // return allCards;
  }

  // const ShoppingPageCards = (product: Products) => {
  //   let image = product.product_image.split(';')[0];

  //   return (
  //     <div className="col">
  //       <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${image})` }}>
  //         <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
  //           <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{product.product_name}</h2>
  //           <ul className="d-flex list-unstyled mt-auto">
  //             <li className="me-auto">
  //               <img src={catImage} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
  //             </li>
  //             <li className="d-flex align-items-center me-3">
  //               <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
  //               <small>Stock</small>
  //             </li>
  //             <li className="d-flex align-items-center">
  //               <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
  //               <small>{product.product_stock_amt - product.product_order_amt}</small>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

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