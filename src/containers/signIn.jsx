import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {
    setCookie,
    validateEmail
} from '../utils/general';
import { setUserData } from '../slices/userDataSlice';

const SignIn = ({ navigate }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false);

    const dispatch = useDispatch();

    const signInUrl = "http://localhost:8080/sign-in";

    useEffect(() => {
        if (formError) setFormError(false);
    }, [username, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
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

        fetch(signInUrl, {
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
            localStorage.setItem('token', data.token);
            dispatch(setUserData(data.user));

            navigate("dashboard");
        }).catch(err => {
            console.log('ERROR')
            console.log(err)

            setLoading(false);
            setFormError(true);
        });
    };

    const getErrorMsg = () => {
        if (formError) return <div className="error">invalid username/password.</div>;
        else return <div className="error"></div>;
    };

    return (
        <div className="content">
            <div className="sign-in">
                <div>
                    <div className="text-large font-bold">
                        Welcome back 👋
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            {
                                getErrorMsg()
                            }
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
                            Submit
                        </button>
                    </form>
                    <div className='text-small center sign-up-link'>
                        <p>No account? <span onClick={() => navigate("sign-up")}>Sign up</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;