import { useEffect, useState } from 'react';
import {
    validateEmail,
    validatePassword
} from '../utils/general';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {

    }, [])

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
            setUsernameError(true);
        }

        if (!isValidPassword) {
            setPasswordError(true);
        }

        setLoading(false)
    };

    return (
        <div className="sign-in content">
            sign in
            {
                usernameError && <div className="error">invalid username.</div>
            }
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            {
                passwordError && <div className="error">invalid password.</div>
            }
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <div className="btn" onClick={handleSubmit}>
                Submit
            </div>
            <div>
                No account? <span>Sign up</span>.
            </div>
        </div>
    );
}

export default SignIn;