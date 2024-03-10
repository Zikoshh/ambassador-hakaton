import Routes from '../routes';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import { useState } from 'react';

const App = () => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Анна Белова',
        email: 'annabelova@yandex.ru',
        job: 'Менеджер',
    });
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes />
        </CurrentUserContext.Provider>
    );
};

export default App;
