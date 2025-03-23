import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import productService from "../../services/productService";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsCreate from "../comments-create/CommentsCreate";
import commentService from "../../services/commentService";
import { UserContext } from "../../contexts/UserContext";

export default function ProductDetails() {

    const navigate = useNavigate();
    const { email } = useContext(UserContext);
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([])
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);
        commentService.getAll(productId)
            .then(setComments)

    }, [productId]);

    const productDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${product.title}?`);

        if (!hasConfirm) {
            return;
        }

        await productService.delete(productId);
        navigate('/products');
    }

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment]);
    };


    return (
        <>


            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">

                            <img className="card-img img-fluid" src={product.imageUrl} alt="" id="product-details" />


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
                                    <CommentsShow comments={comments} />

                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Link to={`/products/${productId}/edit`} className="btn btn-success btn-lg" >Edit</Link>
                                        </div>
                                        <div className="col d-grid">
                                            <button onClick={productDeleteClickHandler} className="btn btn-success btn-lg">
                                                Delete
                                            </button>
                                        </div>
                                        <div className="col d-grid">
                                            <button type="" className="btn btn-success btn-lg" name="submit" value="">Like</button>
                                        </div>
                                    </div>

                                    <CommentsCreate email={email} productId={productId} onCreate={commentCreateHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}