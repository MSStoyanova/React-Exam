import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productService from "../../services/productService";

export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await productService.getOne(productId)
            setProduct(result)
        })();

    }, [productId])

    return (
        <>


            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={product.imageUrl} alt="Card image cap" id="product-detail" />
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{product.title}</h1>
                                    <p className="h3 py-2">Price: ${product.price}</p>
                                    <p className="py-2">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                    </p>

                                    <h6>Description:</h6>
                                    <p>{product.description}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Color : {product.color}</h6>
                                        </li>

                                    </ul>


                                    <form action="" method="GET">
                                        <input type="hidden" name="title" value={product.title} />
                                        <div className="row">
                                            <div className="col-auto">

                                            </div>
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">Quantity: {product.quantity}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <a href="/create-edit-product.html"></a>
                                                <button type="" className="btn btn-success btn-lg" name="submit" value="">Edit</button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="" className="btn btn-success btn-lg" name="submit" value="">Delete</button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="" className="btn btn-success btn-lg" name="submit" value="">Like</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}