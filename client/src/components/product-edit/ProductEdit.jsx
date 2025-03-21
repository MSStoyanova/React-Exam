import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import productService from "../../services/productService";

export default function ProductEdit() {


    const navigate = useNavigate();
    const { productId } = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);
    }, [productId]);

    const formAction = async (formData) => {
        const productData = Object.fromEntries(formData);

        console.log(productData);

        await productService.edit(productId, productData);

        navigate(`/products/${productId}/details`);
    }


    return (
        <>

            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Edit product information</h1>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <form id="edit" action={formAction} className="col-md-9 m-auto" method="POST" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Title</label>
                                <input type="text" className="form-control mt-1" id="title" name="title" defaultValue={product.title} />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputcolor">Color</label>
                                <input type="text" className="form-control mt-1" id="color" name="color" defaultValue={product.color} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputprice">Price</label>
                                <input type="number" className="form-control mt-1" id="price" name="price" defaultValue={product.price} />
                            </div>

                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputquantity">Quantity</label>
                                <input type="number" className="form-control mt-1" id="quantity" name="quantity" defaultValue={product.quantity} />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputimage">Image URL</label>
                            <input type="text" className="form-control mt-1" id="imageUrl" name="imageUrl" defaultValue={product.imageUrl} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputmessage">Description</label>
                            <textarea className="form-control mt-1" id="description" name="description" defaultValue={product.description} rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}