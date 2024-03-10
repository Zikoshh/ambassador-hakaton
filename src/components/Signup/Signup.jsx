import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../utils/api/UserApi';
import imgErrorEmailPath from '../../img/icon-errorRed.svg';
import imgBackPath from '../../img/back-button.svg';
import imgPasswordCorrectPatch from '../../img/password-correct.svg';

import './Signup.css';

const Signup = () => {
    let navigate = useNavigate(); // навигация в react v6

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isStep, setStep] = useState(0);
    console.log('isStep=', isStep);
    const [isTyping, setIsTyping] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorApi, setErrorApi] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [passwordLength, setPasswordLength] = useState(0);
    const [neutral, setNeutral] = useState(true);
    const [passwordMatched, setPasswordMatched] = useState(false);

    const validateEmail = (email) => {
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailFormat.test(email);
    };

    useEffect(() => {
        if (password.length > 0) {
            setNeutral(false);
        }
    }, [password]);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
        } else {
            if (passwordLength < 8) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: 'Слишком короткий пароль'
                }));
            } else if (password !== confirmPassword) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirmPassword: 'Пароли не совпадают'
                }));
            } else {
                console.log('email=', email);
                console.log('password=', password);
                userApi
                    .signup({
                        password,
                        email,
                        username: email,
                        confirm_password: password
                    })
                    .then(() => {
                        navigate('/signup_confirmation');
                    })
                    .catch(() => {
                        setErrorApi('Что-то пошло не так');
                    });
                //alert('Данные отправлены!');
            }
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordLength(newPassword.length);

        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;

        if (value.length >= 8 && value === password) {
            setPasswordMatched(true);
        } else {
            setPasswordMatched(false);
        }

        setConfirmPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    };

    const handleTyping = (e) => {
        if (e.target.value.trim() !== '') {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    };

    const clearEmail = () => {
        setEmail('');
    };
    const handleDownStep = () => {
        setStep(isStep - 1);
    };
    return (
        <section className="password">
            <div className="password__container">
                {isStep == 0 ? (
                    <>
                        <div className="password__title-container">
                            <Link to="/login" className="email__link-back">
                                {' '}
                                <img src={imgBackPath}></img>
                            </Link>
                            <h1 className="password__title">Регистрация в CRM</h1>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="password__title-container">
                            <Link onClick={handleDownStep} className="email__link-back">
                                {' '}
                                <img src={imgBackPath}></img>
                            </Link>
                            <h1 className="password__title">Регистрация в CRM</h1>
                        </div>
                        <h2 className="password__subtitle">Пароль должен содержать минимум 8 символов</h2>

                    </>
                )}
                <form className="login__form" onSubmit={handleSubmit}>
                    {isStep == 0 ? (
                        <>
                            <label className="login__label">
                                Email
                                <div className="login__label-container">
                                    <input
                                        className={`login__input ${!emailValid ? 'login__error' : ''}`}
                                        placeholder="Введите ваш email"
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
                        </>
                    ) : (
                        <>
                            <label className="password__label">
                                Создайте пароль
                                <div
                                    className={`password__label-container ${
                                        neutral ? 'neutral' : passwordLength >= 8 ? 'valid' : 'invalid'
                                    }`}
                                >
                                    <input
                                        className={`password__input ${neutral ? 'neutral' : passwordLength >= 8 ? 'valid' : 'invalid'}`}
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    <picture
                                        className={`password__input-image ${showPassword ? 'opened' : 'closed'} ${
                                            passwordLength >= 8 ? 'image-shift' : ''
                                        }`}
                                        onClick={handleTogglePassword}
                                    ></picture>
                                    {passwordLength >= 8 && (
                                        <img src={imgPasswordCorrectPatch} alt="Valid Password" className="password__input-imageCorrect" />
                                    )}
                                </div>
                                {errors.password && <span className="password__error">{errors.password}</span>}
                            </label>
                            <label className="password__label">
                                Подтвердите пароль
                                <div className="password__label-container">
                                    <input
                                        className={`password__input ${neutral ? 'neutral' : passwordMatched ? 'valid' : 'invalid'}`}
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <picture
                                        className={`password__input-image ${showPassword ? 'opened' : 'closed'} ${
                                            passwordMatched ? 'image-shift' : ''
                                        }`}
                                        onClick={handleTogglePassword}
                                    ></picture>
                                    {passwordMatched && (
                                        <img src={imgPasswordCorrectPatch} alt="Valid Password" className="password__input-imageCorrect" />
                                    )}
                                </div>
                                {errors.confirmPassword && <span className="password__error">{errors.confirmPassword}</span>}
                                {errorApi && <span className="password__error">{errorApi}</span>}
                            </label>
                        </>
                    )}
                    <Link onClick={handleSubmit} className="login__button email__button-signup">
                        {' '}
                        Продолжить
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Signup;
