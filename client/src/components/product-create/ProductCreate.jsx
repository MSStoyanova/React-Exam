import productService from "../../services/productService";
import { useNavigate } from "react-router";


export default function ProductCreate() {
    const navigate = useNavigate()
    const submitAction = async (formData) => {
        const productData = Object.fromEntries(formData);

        await productService.create(productData);
        navigate('/products');
    }

    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Create new product</h1>
                </div>
            </div>


            <div className="container py-5">
                <div className="row py-5">
                    <form id="create" action={submitAction} className="col-md-9 m-auto" method="POST" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Title</label>
                                <input type="text" className="form-control mt-1" id="title" name="title" placeholder="Title" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputcolor">Color</label>
                                <input type="text" className="form-control mt-1" id="color" name="color" placeholder="Color" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputprice">Price</label>
                                <input type="number" className="form-control mt-1" id="price" name="price" placeholder="Price" />
                            </div>
                            {/* <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputemail">Specs</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div> */}

                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputquantity">Quantity</label>
                                <input type="number" className="form-control mt-1" id="quantity" name="quantity" placeholder="Quantity" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputimage">Image URL</label>
                            <input type="text" className="form-control mt-1" id="imageUrl" name="imageUrl" placeholder="Image" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputmessage">Description</label>
                            <textarea className="form-control mt-1" id="description" name="description" placeholder="Description" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}