import './App.scss';
import { useEffect, useState } from 'react';
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import {
  user
} from './utils/gun';


function App() {
  const [page, setPage] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = () => {
    if (user.is) setPage("dashboard");
    else setPage("sign-in");
  }

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