export default function Home() {
    return (
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="/img/baner-1.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>MT Wear - </b> Totally crazy and really diverse...</h1>
                                        <h3 className="h2">May every day be filled with smiles, inspiration, and love!</h3>
                                        <p>
                                        Our products are here to remind you of the power of small moments that make the day more colorful and full of joy.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="/img/banner-2.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">

                                        <h1 className="h1 text-success"><b>The cups you're looking for!</b></h1>
                                        <h3 className="h2">Add a unique accent to your coffee or surprise with the perfect gift for any occasion.</h3>
                                        <p>
                                        When coffee cups aren't exactly for "coffee"... But they look cool...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="/img/banner-3.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1 text-success"><b>A little color, A few heroes, A few hats!</b></h1>
                                        <h3 className="h2">It has never been easier.</h3>
                                        <p>
                                        A perfect gift or a stylish accent for the wardrobe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel"
                    role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel"
                    role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>



        </>
    );
}