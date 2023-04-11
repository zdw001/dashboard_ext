import './App.scss';
import { useEffect, useState } from 'react';
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';

function App() {
  const [page, setPage] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = () => {
    // TODO
    if (userData) setPage("dashboard");
    else setPage("sign-in");
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard userData={userData} setUserData={setUserData} navigate={setPage} />
      case "sign-up":
        return <SignUp userData={userData} setUserData={setUserData} navigate={setPage} />
      case "sign-in":
        return <SignIn userData={userData} setUserData={setUserData} navigate={setPage} />
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