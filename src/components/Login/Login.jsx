import { Link } from 'react-router-dom';
import { useState } from 'react';

import Login_step1 from './Login_step1';

const Login = () => {
  const [isStep, setStep] = useState(0);
  console.log('step = ', isStep);

  const handleContinue = () => {
    setStep(isStep + 1);
    console.log('нажатие степ1')
  }

  const handleChangeInputEmail = () => {
    
  }
  return (
    <section className="email">
        <div className="email__container">
            <h1 className="email__title">Войти в CRM</h1>
            <form className="email__form">
                <Login_step1 />
            </form>
            {}
            <Link className="email__button" onClick={handleContinue}>
                {isStep == 0 ? "Продолжить" : "Войти"}
            </Link>
            <img src="/src/img/devider.svg" className="email__devider" alt="разделительная линия"></img>
            <p className="email__question">
                Ещё нет аккаунта в CRM?
                <Link to="/signup-email" className="email__link">
                    {' '}
                    Создать
                </Link>
            </p>
        </div>
    </section>
  )
};

export default Login;
