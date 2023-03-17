import { useEffect, useState } from 'react';
import {
    validateEmail
} from '../utils/general';
import {
    user
} from '../utils/gun';

const SignIn = ({ navigate }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false);

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (formError) setFormError(false);
    }, [username, password]);

    const handleSubmit = () => {
        setLoading(true);

        console.log(username);
        console.log(password);

        // Validate email address
        let isValidEmail = validateEmail(username);

        if (!isValidEmail) {
            // Error
            setLoading(false);
            setFormError(true);
            return;
        }

        console.log('SUBMITTING...')
        user.auth(username, password, handleCallback)
    };

    const handleCallback = (resp) => {
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
        <div className="content">
            <div className="sign-in">
                <div>
                    <div className="text-large font-bold">
                        Welcome back 👋
                    </div>
                    {
                        formError && <div className="error">invalid username/password.</div>
                    }
                    <div className="inputs">
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="btn" onClick={handleSubmit}>
                        Submit
                    </div>
                    <div className='text-small center sign-up-link'>
                        <p>No account? <span onClick={() => navigate("sign-up")}>Sign up</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;