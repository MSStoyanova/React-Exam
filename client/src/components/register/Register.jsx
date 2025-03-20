import { Link } from "react-router";

export default function Register() {
    return (
        <>

            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Register</h1>
                </div>
            </div>


            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="text" className="form-control mt-1" id="password" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Repeat Password</label>
                                <input type="text" className="form-control mt-1" name="re-password" id="re-password" placeholder="Repeat password" />
                            </div>


                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Register</button>
                                <p className="message">Already registered? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}