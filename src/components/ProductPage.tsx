import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { selectProduct, setProductAction } from "../slices/ProductsSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";
import { useParams } from "react-router-dom";
import { Products } from "../models/Products";
import '../css/ProductPage.css';
import { addToCartAction } from "../slices/OrdersSlice";
import { Cart } from "../models/Cart";

const ProductPage: React.FC = () => {
    const numberLiteral = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

    const [quantity, setQuantity] = useState(1);
    const [inputRef] = useState(useRef<HTMLInputElement>(null));

    const dispatch = useAppDispatch();
    const params: any = useParams();
    const productId = Number.parseInt(params.productId);

    useEffect(() => {
        dispatch(setProductAction(productId))
    }, [dispatch, productId]);

    const productStr: string = UseAppSelector(selectProduct);

    const product: Products = JSON.parse(productStr);;

    let index = 0;


    const getProductPic = () => (
        product.productImage.split(';').map((image: any) => (
            <div className={"carousel-item" + (index > 0 ? "" : " active")} key={"image" + index}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${image}.jpg`} alt={numberLiteral[index++] + " slide"} className="img-fluid" />
            </div>
        )))

    return (
        <div className="container mt-5 pt-3">

            <section id="productDetails" className="pb-5">

                <div className="card mt-5 hoverable">
                    <div className="row mt-5">
                        <div className="col-lg-6">

                            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                                <div className="carousel-inner text-center text-md-left" role="listbox">
                                    {getProductPic()}
                                </div>

                                <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-5 mr-3 text-center text-md-left">
                            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                                <strong>{product.productName}</strong>
                            </h2>
                            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                                <span className="red-text font-weight-bold">
                                    <strong>${product.productPrice}</strong>
                                </span>
                                <span className="grey-text">
                                    <small>
                                        <s>$2998.99</s>
                                    </small>
                                </span>
                            </h3>

                            <div className="flex-shrink-0 p-3 bg-white">
                                <ul className="list-unstyled ps-0">
                                    <li className="mb-1">
                                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                            <h5 className="mb-0" id="flashHover">Description</h5>
                                        </button>
                                        <div className="collapse show" id="home-collapse">
                                            <p>{product.productDescription}</p>
                                            <p>Stock Remaining Amount: {product.productStockAmt - product.productOrderAmt}</p>
                                        </div>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                            <h5 className="mb-0" id="flashHover">Detail</h5>
                                        </button>
                                        <div className="collapse" id="dashboard-collapse">
                                            <p>Add detail here: </p>
                                        </div>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                            <h5 className="mb-0" id="flashHover">Shipping</h5>
                                        </button>
                                        <div className="collapse" id="orders-collapse">
                                            <p>Product Weight: {product.productWeight}</p>
                                        </div>
                                    </li>
                                    <li className="border-top my-3"></li>
                                </ul>
                            </div>


                            <section className="quantity">
                                <div className="mt-5">
                                    <div className="form-group col-md flex-grow-0">
                                        <label><strong>Quantity</strong></label>
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-minus" onClick={() => { if (quantity > 1 && inputRef.current) { inputRef.current.value = '' + (quantity - 1); setQuantity(quantity - 1); } }}> &minus; </button>
                                            </div>
                                            <input type="text" className="input-group-append" ref={inputRef} defaultValue={quantity} onChange={e => { if (99 > quantity && quantity > 1) setQuantity(parseInt(e.target.value)); }} style={{ textAlign: 'center', width: 52, padding: '10px 15px', margin: '0 5px', border: 'none' }} />
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-plus" onClick={() => { if (quantity < 99 && inputRef.current) { inputRef.current.value = '' + (quantity + 1); setQuantity(quantity + 1); } }}> + </button>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary btn-rounded" onClick={()=>{dispatch(addToCartAction(new Cart(0, product.productName, product.productId, quantity, Math.round(quantity*product.productPrice*100)/100))) }}>
                                            <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart
                                        </button>
                                    </div>

                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage;