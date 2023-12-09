import { useContext, useState} from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import Header from "../Headers/Header";
import Path from "../../paths";
import Decoration from "../Decoration/Decoration";
import ErrorModal from "../Modals/ErrorModal";

const SignInFormKyes = {
    Email: 'email',
    Password: 'password',
};

function SignIn() {
    const { loginSubmitHandler, getError, dismissError } = useContext(AuthContext);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const validationRules = {
        [SignInFormKyes.Email]: { required: true, email: true },
        [SignInFormKyes.Password]: { required: true },
    };

    const { values, onChange, errors, onSubmit } = useForm(loginSubmitHandler, {
        [SignInFormKyes.Email]: '',
        [SignInFormKyes.Password]: '',
        },
        validationRules);

    const errorMessage = getError();
    if (errorMessage) {
        if (!showErrorModal) {
            setShowErrorModal(true);
        }
    }

    const onCloseModalHandler = () => {
        dismissError();
        setShowErrorModal(false);
    }

    return (
        <>
            <Header title={'Sign In'} img={'../img/contact_us.png'}/>
            <Decoration />
            {showErrorModal && (<ErrorModal errorMessage={errorMessage} onClose={onCloseModalHandler}/>)}
            <div className="container mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.5s">
                        <h1 className="text-center mb-4">Sign In</h1>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name={SignInFormKyes.Email}
                                        placeholder="Email"
                                        onChange={onChange}
                                        value={values[SignInFormKyes.Email]}
                                        
                                        />
                                        <label htmlFor="subject">Email<span className="text-danger">*</span></label>
                                        {errors[SignInFormKyes.Email] && <p className="text-danger fs-6 fst-italic m-0">{errors[SignInFormKyes.Email]}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Password"
                                        name={SignInFormKyes.Password}
                                        onChange={onChange}
                                        value={values[SignInFormKyes.Password]}
                                        
                                        />
                                        <label htmlFor="subject">Password<span className="text-danger">*</span></label>
                                        {errors[SignInFormKyes.Password] && <p className="text-danger fs-6 fst-italic m-0">{errors[SignInFormKyes.Password]}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            Not a Member yet?
                            <Link to={Path.SignUp} className="ms-2">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;