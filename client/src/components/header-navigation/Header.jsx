import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <Link className="navbar-brand text-success logo h1 align-self-center" to="indexOriginal.html">
                        MT Wear
                    </Link>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Catalog</Link>
                                </li>
                                <div id="user">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products/create">Create</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">Logout</Link>
                                    </li>
                                </div>


                                <div id="guest">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Log in</Link>
                                    </li>
                                    
                                </div>


                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <Link className="nav-icon d-none d-lg-inline" to="#" data-bs-toggle="modal"
                                data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </Link>
                            <Link className="nav-icon position-relative text-decoration-none" to="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span
                                    className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </Link>
                            <Link className="nav-icon position-relative text-decoration-none" to="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span
                                    className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}