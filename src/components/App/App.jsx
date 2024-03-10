import Routes from '../routes';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import { useState, useEffect } from 'react';
import mainApi from '../../utils/api/MainApi';

const App = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        mainApi.getUser()
          .then((res) => {
            setCurrentUser(res);
          })
          .catch(console.error)
      }, [])
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes />
        </CurrentUserContext.Provider>
    );
};

export default App;
