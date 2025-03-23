import { useState } from "react";
import { useEffect } from "react";
import productService from "../../services/productService";
import ProductCatalogItem from "./product-catalog-item/ProductCatalogItem";

export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.getAll()
            .then(result => {
                setProducts(result);
            })

    }, []);


    return (
        <>
            <div className="container py-5">
                <div className="row">

                    {/* <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="/products">
                                    Products
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul className="collapse show list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="#">T-shirts</a></li>
                                    <li><a className="text-decoration-none" href="#">Cans</a></li>
                                    <li><a className="text-decoration-none" href="#">Cans</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div> */}

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <ul className="list-inline shop-top-menu pb-3 pt-1"> */}
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">Products</a>
                                    </li>
                                {/* </ul> */}
                            </div>
                            {/* <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">

                            {products.length > 0
                            ? products.map(product => <ProductCatalogItem key={product._id} {...product} />)
                            :  <h3 className="no-articles">No articles yet</h3>
                            }
                           
                        </div>
                        {/* <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#"
                                        tabindex="-1">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                                        href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    );
}