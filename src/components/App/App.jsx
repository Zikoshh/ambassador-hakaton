import Main from '../Main/Main';
import Email_signup from '../Registration/Email/Email_signup.jsx';
import Password_signup from '../Registration/Password/Password_signup';
import Email_confirmation from '../Registration/Email-confirmation/Email_confirmation.jsx';
import Email_help from '../Registration/Email-help/Email_help';
import Login from '../Login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="page">
      {['/'].includes(location.pathname) && <Main />}
      <Routes>
        <Route path="/signin-email" element={<Login />} />
        <Route path="/signup-email" element={<Email_signup />} />
        <Route path="/signup-password" element={<Password_signup />} />
        <Route path="/signup-confirmation" element={<Email_confirmation />} />
        <Route path="/signup-help" element={<Email_help />} />
      </Routes>
    </div>
  );
}

export default App;
