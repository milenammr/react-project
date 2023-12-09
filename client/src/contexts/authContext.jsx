import { createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({
    // eslint-disable-next-line react/prop-types
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [errorMessage, setErrorMessage] = useState(null);

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
    
            setAuth(result);
    
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            setErrorMessage(error.message);
            
        }
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.username, values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const dismissError = () => {
        setErrorMessage(null);
    }

    const getError = () => errorMessage;

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        getError,
        dismissError
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
