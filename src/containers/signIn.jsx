import { useEffect, useState } from 'react';
import {
    validateEmail
} from '../utils/general';

const SignIn = () => {
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
            setFormError(true);
        }

        setLoading(false)
    };

    return (
        <div className="sign-in content">
            sign in
            {
                formError && <div className="error">invalid username/password.</div>
            }
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <div className="btn" onClick={handleSubmit}>
                Submit
            </div>
        </div>
    );
}

export default SignIn;