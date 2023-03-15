import { useEffect, useState } from 'react';
import {
    validateEmail,
    validatePassword
} from '../utils/general';

const SignUp = ({ navigate, user }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        if (usernameError) setUsername(false);
    }, [username]);

    useEffect(() => {
        if (passwordError) setPasswordError(false);
    }, [password]);

    const handleSubmit = () => {
        setLoading(true);

        // Validate email address
        let isValidEmail = validateEmail(username);
        let isValidPassword = validatePassword(password);

        if (!isValidEmail) {
            console.log('EMAIL ERROR')
            setUsernameError(true);
            setLoading(false);
            return;
        }

        if (!isValidPassword) {
            console.log('PASSWORD ERROR')
            setPasswordError(true);
            setLoading(false);
            return;
        }

        console.log('CREATING USER...')
        user.create(username, password, handleSuccess)
    };

    const handleSuccess = (resp) => {
        console.log(resp)
        if (resp.err) {
            setLoading(false);
            setFormError(true);
            return;
        }

        setTimeout(() => {
            saveToLocalStorage();
        }, 500);

        navigate("dashboard");
    };

    const saveToLocalStorage = () => {
        let pair = sessionStorage.getItem('pair');

        localStorage.setItem('pair', pair)
    };

    return (
        <div className="sign-in content">
            sign up
            {
                usernameError && <div className="error">invalid username.</div>
            }
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            {
                passwordError && <div className="error">invalid password.</div>
            }
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <div className="btn" onClick={handleSubmit}>
                Create Account
            </div>
            <div>
                Already have an account? <span onClick={() => navigate("sign-in")}>Sign in</span>.
            </div>
        </div>
    );
}

export default SignUp;