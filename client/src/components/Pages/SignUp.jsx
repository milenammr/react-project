import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import Header from "../Headers/Header";
import Path from "../../paths";
import Decoration from "../Decoration/Decoration";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

function SignUp() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const validationRules = {
        [RegisterFormKeys.Username]: { required: true },
        [RegisterFormKeys.Email]: { required: true, email: true },
        [RegisterFormKeys.Password]: { required: true },
        [RegisterFormKeys.ConfirmPassword]: { required: true },
    };

    const { values, onChange, errors, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
        },
        validationRules
    );

    return (
        <>
            <Header title={'Sign In'} img={'../img/contact_us.png'}/>
            <Decoration />
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
                                        <label htmlFor="username">Username<span className="text-danger">*</span></label>
                                        {errors[RegisterFormKeys.Username] && <p className="text-danger fs-6 fst-italic m-0">{errors[RegisterFormKeys.Username]}</p>}
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
                                        <label htmlFor="email">Email<span className="text-danger">*</span></label>
                                        {errors[RegisterFormKeys.Email] && <p className="text-danger fs-6 fst-italic m-0">{errors[RegisterFormKeys.Email]}</p>}
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
                                        <label htmlFor="password">Password<span className="text-danger">*</span></label>
                                        {errors[RegisterFormKeys.Password] && <p className="text-danger fs-6 fst-italic m-0">{errors[RegisterFormKeys.Password]}</p>}
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
                                        <label htmlFor="confirm-password">Confirm Password<span className="text-danger">*</span></label>
                                        {errors[RegisterFormKeys.ConfirmPassword] && <p className="text-danger fs-6 fst-italic m-0">{errors[RegisterFormKeys.ConfirmPassword]}</p>}
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