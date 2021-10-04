import { render } from "@testing-library/react";
import React, { useState, useRef } from "react";
import { searchProductsAsync } from "../actions/ProductsActions";
import { selectProducts } from "../slices/ProductsSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

export const ProductPage: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [inputRef] = useState(useRef<HTMLInputElement>(null));
    const [product, setProduct] = useState(UseAppSelector(selectProducts));

    const numberLiteral = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

    const dispatch = useAppDispatch();

    const reloadProduct = async() => {
        dispatch(searchProductsAsync(product.product.product_number));
    }

    const getProductPic = () => {
        let images = product.product.product_image.split(';');

        // let renderImages:React.ReactFragment[] = [];
        // let index = 0;
        // for (let singleImageLink of images) {
        //     renderImages[index] = () => {
        //         return (
        //             '<div className="carousel-item' + (index>0? '': ' active') + '">\n' +
        //             '<img src = \'' + singleImageLink + '\' alt="' + numberLiteral[index] + ' slide" className="img-fluid" />\n' +
        //             '</div>\n'        
        //         )
        //     }

        //     index++;
        // }

        let index = 0;

        return images.map(() => {
                return (
                    <div className= {"carousel-item" + (index > 0? "": " active")}>
                        <img src = {images[index]} alt= {numberLiteral[index] + " slide"} className="img-fluid" />
                    </div>
                )
        });
    }
    
    reloadProduct();

    return (
        <div className="container mt-5 pt-3">

            <section id="productDetails" className="pb-5">

                <div className="card mt-5 hoverable">
                    <div className="row mt-5">
                        <div className="col-lg-6">

                            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

                                <div className="carousel-inner text-center text-md-left" role="listbox">
                                    {getProductPic}
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
                                <strong>Sony headphones</strong>
                            </h2>
                            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                                <span className="red-text font-weight-bold">
                                    <strong>$49</strong>
                                </span>
                                <span className="grey-text">
                                    <small>
                                        <s>$89</s>
                                    </small>
                                </span>
                            </h3>

                            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">


                                <div className="card">

                                    <div className="card-header" role="tab" id="headingOne1">
                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                            <h5 className="mb-0">
                                                Description
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>

                                    <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>


                                <div className="card">


                                    <div className="card-header" role="tab" id="headingTwo2">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                            <h5 className="mb-0">
                                                Details
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>


                                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree3">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                            <h5 className="mb-0">
                                                Shipping
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>


                                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section className="quantity">
                                <div className="mt-5">
                                    <div className="form-group col-md flex-grow-0">
                                        <label><strong>Quantity</strong></label>
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-minus" onClick ={() => {if (quantity > 1) {setQuantity(quantity - 1); if (inputRef.current) inputRef.current.value = '' + quantity; }}}> &minus; </button>
                                            </div>
                                            <input type="text" className="input-group-append" ref={inputRef} defaultValue={quantity} onChange={e => {if (99> quantity && quantity > 1) setQuantity(parseInt(e.target.value)); else e.target.value = '' + quantity}} style={{ textAlign: 'center', width: 52, padding: '10px 15px', margin: '0 5px' }} />
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-plus" onClick ={() => {if (quantity < 99) {setQuantity(quantity + 1); if (inputRef.current) inputRef.current.value = '' + quantity; }}}> + </button>
                                            </div>
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" onClick = {() => console.log('quantity : ' + quantity + '  inputRef : ' + inputRef.current?.value)}></button>
                                            </div>

                                        </div>

                                        <button className="btn btn-primary btn-rounded">
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