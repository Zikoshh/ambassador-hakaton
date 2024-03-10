import Routes, { useState, useEffect } from '../routes';
import { AppContext } from '../../contexts/AppContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { userApi } from '../../utils/api/UserApi';
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // состояние авторизации
    console.log('isLoggedIn=', isLoggedIn);
    const [isCurrentUser, setCurrentUser] = useState({}); // данные текущего пользователя

    useEffect(() => {
        if (isLoggedIn) {
          userApi
            .getUser()
            .then((user) => {
              setCurrentUser(user);
            })
            .catch((err) => {
              console.log(err);
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
