import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Email_signin.css';

const Email_signin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  console.log('email', email);
  const [emailValid, setEmailValid] = useState(true);

  const clearEmail = () => {
    setEmail('');
  };

  const [isTyping, setIsTyping] = useState(false);

  const validateEmail = email => {
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailFormat.test(email);
  };

  const handleContinue = e => {
    e.preventDefault();

    if (!email) {
      setError('Пожалуйста, добавьте ваш Email');
      setEmailValid(false);
    } else if (!validateEmail(email)) {
      setError('Введите корректный Email');
      setEmailValid(false);
    } else {
      window.location.href = '/signin-password';
      setEmailValid(true);
    }
  };

  const handleTyping = e => {
    if (e.target.value.trim() !== '') {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <section className="email">
      <div className="email__container">
        <h1 className="email__title">Войти в CRM</h1>
        <form className="email__form">
          <label className="email__label">
            Email
            <div className="email__label-container">
              <input
                className={`email__input ${!emailValid ? 'error' : ''}`}
                placeholder="mail@yandex.ru"
                value={email}
                onChange={e => {
                  handleTyping(e);
                  setEmail(e.target.value);
                  setIsTyping(true);
                  setEmailValid(true);
                }}
              />
              {error && (
                <img
                  src="/src/img/icon-errorRed.svg"
                  alt={isTyping ? 'Серый крестик' : 'Красный крестик'}
                  className="email__input-error"
                  onClick={clearEmail}
                />
              )}
              {error && <span className="email__span">{error}</span>}
            </div>
          </label>
          <Link to="/signin-password" className="email__button" onClick={handleContinue}>
            {' '}
            Продолжить
          </Link>
          <img
            src="/src/img/devider.svg"
            className="email__devider"
            alt="разделительная линия"
          ></img>
          <p className="email__question">
            Ещё нет аккаунта в CRM?
            <Link to="/signup-email" className="email__link">
              {' '}
              Создать
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Email_signin;

// if (!email) {
//   setError('Пожалуйста, добавьте ваш Email');
// } else if (!validateEmail(email)) {
//   setError('Введите корректный Email');
// } else {
//   window.location.href = '/signin-password';
// }
