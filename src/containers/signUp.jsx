import { useEffect, useState } from 'react';
import {
    validateEmail,
    validatePassword
} from '../utils/general';
import {
    user
} from '../utils/gun';

const SignUp = ({ navigate }) => {
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
        }

        if (!isValidPassword) {
            console.log('PASSWORD ERROR')
            setPasswordError(true);
        }

        if (!isValidEmail || !isValidPassword) {
            setLoading(false);
            return;
        }

        console.log('CREATING USER...')
        user.create(username, password, handleAuth);

    };

    const handleAuth = () => {
        user.auth(username, password, handleSuccess)
    };

    const handleSuccess = (resp) => {
        console.log('auth resp:')
        console.log(resp)
        if (resp.err) {
            setLoading(false);
            setUsername("");
            setPassword("");
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
        <div className="content">
            <div className="sign-in">
                <div>
                    <div className="text-large font-bold">
                        Sign up
                    </div>
                    <div className="inputs">
                        {
                            usernameError && <div className="error">invalid username.</div>
                        }
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        {
                            passwordError && <div className="error">invalid password.</div>
                        }
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="btn" onClick={handleSubmit}>
                        Create Account
                    </div>
                    <div className='text-small center sign-up-link'>
                        Already have an account? <span onClick={() => navigate("sign-in")}>Sign in</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;