import './App.scss';
import { useEffect, useState } from 'react';
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';

function App() {
  const [page, setPage] = useState("dashboard");

  useEffect(() => {
    // If not authenticated, send to sign in
    setPage("sign-in");
  }, [])

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />
      case "sign-up":
        return <SignUp />
      default:
        return <SignIn />
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