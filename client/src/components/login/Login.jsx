import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();
    const { login } = useLogin();


    const loginHandler = async (previousState, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password)

        onLogin(authData);

        // navigate('/products');

        return values;
    }
    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });
    
    return (
        <>

            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Log in</h1>
                </div>
            </div>

            <div className="container-fluid bg-light py-5">
                <div className="row py-5">
                    <form id="login" action={loginAction} className="col-md-9 m-auto" role="form" >
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputName">Password</label>
                                <input type="text" className="form-control mt-1" id="password" name="password" placeholder="Password" />
                            </div>


                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3" value="Login" disabled={isPending}>Log in</button>
                                <p className="message">
                                    Not registered? <Link to="/Register">Create an account</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

