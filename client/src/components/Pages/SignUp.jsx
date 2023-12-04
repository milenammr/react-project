import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import Header from "../Headers/Header";
import Path from "../../paths";
import Search from "../Search/Search";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

function SignUp() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <>
            <Header title={'Sign In'} img={'../img/contact_us.png'}/>
            <Search />
            <div className="container mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.5s">
                        <h1 className="text-center mb-4">Sign Up</h1>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        name={RegisterFormKeys.Username}
                                        placeholder="Username"
                                        onChange={onChange}
                                        values={values[RegisterFormKeys.Username]}
                                        />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name={RegisterFormKeys.Email}
                                        placeholder="Email"
                                        onChange={onChange}
                                        values={values[RegisterFormKeys.Email]}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Password"
                                        name={RegisterFormKeys.Password}
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.Password]}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="confirm-password" 
                                        placeholder="Confirm Password"
                                        name={RegisterFormKeys.ConfirmPassword}
                                        onChange={onChange}
                                        value={values[RegisterFormKeys.ConfirmPassword]}
                                        />
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            Have an account?
                            <Link to={Path.SignIn} className="ms-2">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;