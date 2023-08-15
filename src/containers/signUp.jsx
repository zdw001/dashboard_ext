import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {
    setCookie,
    validateEmail,
    validatePassword
} from '../utils/general';
import { setUserData } from '../slices/userDataSlice';

const SignUp = ({ navigate }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const dispatch = useDispatch();

    const signUpUrl = "http://localhost:8085/sign-up";
    const salt = 10;

    useEffect(() => {
        if (usernameError) setUsernameError(false);
    }, [username]);

    useEffect(() => {
        if (passwordError) setPasswordError(false);
    }, [password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
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

        if (!isValidEmail || !isValidPassword) {
            setLoading(false);
            return;
        }

        fetch(signUpUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, 
                password: password
            })
        }).then(function(response) {
            return response.json();
        }).then(data => {
            console.log('sign up resp:')
            console.log(data)
            localStorage.setItem('token', data.token);
            dispatch(setUserData(data.user));

            navigate("dashboard");
        }).catch(err => {
            console.log('ERROR')
            console.log(err)
        });
    };

    const getErrorMsg = () => {
        if (usernameError && passwordError) return <div className="error">invalid username and password.</div>;
        if (usernameError) return <div className="error">invalid username.</div>;
        if (passwordError) return <div className="error">invalid password.</div>;
        else return <div className="error"></div>;
    };

    return (
        <div className="content">
            <div className="sign-in">
                <div>
                    <div className="text-large font-bold">
                        Sign up
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            {getErrorMsg()}
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn" onClick={handleSubmit}>
                            Create Account
                        </button>
                    </form>
                    <div className='text-small center sign-up-link'>
                        Already have an account? <span onClick={() => navigate("sign-in")}>Sign in</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;