import './App.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import { setUserData } from './slices/userDataSlice';

function App() {
  const [page, setPage] = useState(null);
  const userData = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  const getUserDataUrl = "http://localhost:8080/get-session";

  useEffect(() => {
    handleSession();
  }, []);

  useEffect(() => {
  }, [userData])

  const handleSession = () => {
    // TODO
    if (localStorage.getItem('token')) {
      setPage("dashboard");

      // Fetch user data
      fetchUserData();
     } else {
      setPage("sign-in");
     }
  } 

  const fetchUserData = () => {
    fetch(getUserDataUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      
      throw new Error('Something went wrong');
    }).then(data => {
        dispatch(setUserData(data.user));
    }).catch(err => {
        console.log('ERROR')
        console.log(err)

        setPage('sign-in');
    });
  };

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard navigate={setPage} />
      case "sign-up":
        return <SignUp navigate={setPage} />
      case "sign-in":
        return <SignIn navigate={setPage} />
      default:
        return
    }
  }

  return (
    <div className="App">
      {
        renderPage()
      }
    </div>

  );
}

export default App;