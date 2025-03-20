export default function Footer() {
  return (
    <>
       <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">MT Wear</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Veliko Turnovo, Bulgaria, 5000
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:010-020-0340">089 573 7627</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@company.com">emtiwear@gmail.com</a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/profile.php?id=100091918104046"><i
                                    className="fab fa-facebook-f fa-fw"></i>Facebook</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="#">Luxury</a></li>
                        <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                        <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                                            </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="#">Home</a></li>
                        <li><a className="text-decoration-none" href="#">About Us</a></li>
                        <li><a className="text-decoration-none" href="#">Contact</a></li>
                    </ul>
                </div>

            </div>

            {/* <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/profile.php?id=100091918104046"><i
                                    className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                       
                    </ul>
                </div> */}
                {/* <div className="col-auto">
                    <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail"
                            placeholder="Email address" />
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>

        

    </footer>
    </>
  );
}