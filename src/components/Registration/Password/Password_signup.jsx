import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Password_signup.css';

const Password_signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  const [neutral, setNeutral] = useState(true);
  const [passwordMatched, setPasswordMatched] = useState(false);

  useEffect(() => {
    if (password.length > 0) {
      setNeutral(false);
    }
  }, [password]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (passwordLength < 8) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Слишком короткий пароль'
      }));
    } else if (password !== confirmPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: 'Пароли не совпадают'
      }));
    } else {
      alert('Данные отправлены!');
    }
  };

  const handlePasswordChange = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordLength(newPassword.length);

    setErrors(prevErrors => ({ ...prevErrors, password: '' }));
  };

  const handleConfirmPasswordChange = e => {
    const value = e.target.value;

    if (value.length >= 8 && value === password) {
      setPasswordMatched(true);
    } else {
      setPasswordMatched(false);
    }

    setConfirmPassword(value);
    setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
  };

  return (
    <section className="password">
      <div className="password__container">
        <div className="email__title-container">
          <Link to="/signup-email" className="email__link-back">
            {' '}
            <img src="/src/img/back-button.svg"></img>
          </Link>
          <h1 className="password__title">Регистрация в CRM</h1>
        </div>
        <h2 className="password__subtitle">Пароль должен содержать минимум 8 символов</h2>
        <form className="password__form" onSubmit={handleSubmit}>
          <label className="password__label">
            Создайте пароль
            <div
              className={`password__label-container ${
                neutral ? 'neutral' : passwordLength >= 8 ? 'valid' : 'invalid'
              }`}
            >
              <input
                className={`password__input ${
                  neutral ? 'neutral' : passwordLength >= 8 ? 'valid' : 'invalid'
                }`}
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
                <img
                  src="/src/img/password-correct.svg"
                  alt="Valid Password"
                  className="password__input-imageCorrect"
                />
              )}
            </div>
            {errors.password && <span className="password__error">{errors.password}</span>}
          </label>
          <label className="password__label">
            Подтвердите пароль
            <div className="password__label-container">
              <input
                className={`password__input ${
                  neutral ? 'neutral' : passwordMatched ? 'valid' : 'invalid'
                }`}
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
                <img
                  src="/src/img/password-correct.svg"
                  alt="Valid Password"
                  className="password__input-imageCorrect"
                />
              )}
            </div>
            {errors.confirmPassword && (
              <span className="password__error">{errors.confirmPassword}</span>
            )}
          </label>
          <Link to="/signup-confirmation" className="password__button">
            Зарегистрироваться
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Password_signup;
