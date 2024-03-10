import Routes from '../routes';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { AppContext } from '../../contexts/AppContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { userApi } from '../../utils/api/UserApi';
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // состояние авторизации
    console.log('isLoggedIn=', isLoggedIn);
    const [isCurrentUser, setCurrentUser] = useState({}); // данные текущего пользователя
    console.log('isCurrentUser=', isCurrentUser);
  const navigate = useNavigate();


    useEffect(() => {
        if (isLoggedIn) {
          userApi
            .getUserMe()
            .then((user) => {
              setCurrentUser(user);
            })
            .catch((err) => {
              console.log(err);
              setIsLoggedIn(false);
              navigate('/login')
            });
        }
      }, [isLoggedIn]);

    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn
            }}
        >
            <CurrentUserContext.Provider value={{ isCurrentUser, setCurrentUser }}>
                <Routes />
            </CurrentUserContext.Provider>
        </AppContext.Provider>
    );
};

export default App;
