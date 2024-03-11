import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../utils/api/UserApi';
import './Login.css';
import imgErrorEmailPath from '../../img/icon-errorRed.svg';
import dividingline from '../../img/devider.svg';
import imgBackPath from '../../img/back-button.svg';
import { AppContext } from '../../contexts/AppContext';

const Login = () => {
    const { setIsLoggedIn } = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isStep, setStep] = useState(0);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorApi, setErrorApi] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [isTyping, setIsTyping] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailFormat.test(email);
    };

    const clearEmail = () => {
        setEmail('');
    };
    let navigate = useNavigate(); // навигация в react v6

    const handleDownStep = () => {
        setStep(isStep - 1);
    };
    const handleContinue = (evt) => {
        evt.preventDefault();
        console.log('сабмит');
        if (isStep == 0) {
            console.log('isStep=', isStep);
            if (!email) {
                console.log('тут1');

                setErrorEmail('Пожалуйста, добавьте ваш Email');
                setEmailValid(false);
            } else if (!validateEmail(email)) {
                console.log('тут2');

                setErrorEmail('Введите корректный Email');
                setEmailValid(false);
            } else {
                console.log('тут3');
                setStep(isStep + 1);
                setEmailValid(true);
            }
        } else if (isStep == 1) {
            console.log('isStep=', isStep);
            console.log({ email, password });
            userApi
                .signin({
                    password,
                    email
                })
                .then((data) => {
                    localStorage.setItem('access', data.access);
                    localStorage.setItem('refresh', data.refresh);
                    setIsLoggedIn(true);
                    navigate('/');
                })
                .catch((err) => {
                    setErrorApi(err.message);
                });
        }
    };

    const handleTyping = (e) => {
        if (e.target.value.trim() !== '') {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="login">
            <div className={isStep == 0 ? 'login__container' : 'password__container'}>
                {isStep == 0 ? (
                    <h1 className="login__title">Войти в CRM</h1>
                ) : (
                    <div className="password__title-container">
                        <Link onClick={handleDownStep} className="email__link-back">
                            {' '}
                            <img src={imgBackPath}></img>
                        </Link>
                        <h1 className="password__title password__title-signin">Войти в CRM</h1>
                    </div>
                )}
                <form className="login__form" onSubmit={handleContinue}>
                    {isStep == 0 ? (
                        <label className="login__label">
                            Email
                            <div className="login__label-container">
                                <input
                                    className={`login__input ${!emailValid ? 'login__error' : ''}`}
                                    placeholder="mail@yandex.ru"
                                    value={email}
                                    onChange={(e) => {
                                        handleTyping(e);
                                        setEmail(e.target.value);
                                        setIsTyping(true);
                                        setEmailValid(true);
                                    }}
                                />
                                {errorEmail && (
                                    <img
                                        src={imgErrorEmailPath}
                                        alt={isTyping ? 'Серый крестик' : 'Красный крестик'}
                                        className="login__input-error"
                                        onClick={clearEmail}
                                    />
                                )}
                                {errorEmail && <span className="login__span">{errorEmail}</span>}
                            </div>
                        </label>
                    ) : (
                        <label className="password__label">
                            Пароль
                            <div className="password__label-container">
                                <input
                                    className="password__input"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(evt) => {
                                        setPassword(evt.target.value);
                                    }}
                                />
                                <picture
                                    className={`password__input-image ${showPassword ? 'opened' : 'closed'}`}
                                    onClick={handleTogglePassword}
                                ></picture>
                            </div>
                            {errorApi && <span className="password__error">{errorApi}</span>}
                        </label>
                    )}
                </form>
                <Link className="login__button" onClick={handleContinue}>
                    Продолжить
                </Link>
                <img src={dividingline} alt="разделительная линия"></img>
                {isStep == 0 ? (
                    <p className="login__question">
                        Ещё нет аккаунта в CRM?
                        <Link className="login__link" to={'/signup'}>
                            {' '}
                            Создать
                        </Link>
                    </p>
                ) : (
                    <p className="login__question login__question-signin">
                        Забыли свой пароль?
                        <Link to="/signin-passRestore" className="login__link">
                            {' '}
                            Восстановить
                        </Link>
                    </p>
                )}
            </div>
        </section>
    );
};

export default Login;
