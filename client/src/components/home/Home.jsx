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
                                        <h1 className="h1 text-success"><b>MT Were - </b> Леко луд и много разнообразен...</h1>
                                        <h3 className="h2">Нека всеки ден да е изпълнен с усмивки, вдъхновение и любов!</h3>
                                        <p>
                                            Нашите продукти са тук, за да ви напомнят за силата на малките моменти, които правят
                                            деня по-цветен и пълен с радост.

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

                                        <h1 className="h1 text-success"><b>Чашите, които търсите!</b></h1>
                                        <h3 className="h2">Добавете уникален акцент към вашето кафе или изненадайте с перфектния
                                            подарък за всякакъв повод.</h3>
                                        <p>
                                            Когато чашите за "кафе" не са точно за кафе...
                                            Ама пък изглеждат яко...
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
                                        <h1 className="h1 text-success"><b>Малко цвят, Малко герои, Малко шапки!</b></h1>
                                        <h3 className="h2">Никога не е било по-лесно</h3>
                                        <p>
                                            Перфектен подарък или стилен акцент за гардероба.
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