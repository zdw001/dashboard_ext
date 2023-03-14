import './App.scss';
import { useEffect, useState } from 'react';
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import GUN from 'gun/gun';
import SEA from 'gun/sea';


function App() {
  const [page, setPage] = useState("dashboard");

  const gun = GUN({
    peers: ['https://arcane-sierra-12302.herokuapp.com/gun']
  })
  let user = gun.user();

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = () => {
    console.log('USER:')
    console.log(user)
    console.log(user.is)
    if (user.is) setPage("dashboard");
    else setPage("sign-in");
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard user={user} gun={gun} />
      case "sign-up":
        return <SignUp user={user} navigate={setPage} />
      default:
        return <SignIn user={user} navigate={setPage} />
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