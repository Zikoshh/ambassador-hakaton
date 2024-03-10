import { Link } from 'react-router-dom';
import './Signup__confirmation.css';

const Signup__confirmation = () => {
  return (
    <section className="login">
      <div className="login__container">
        <div className="signup__title-container">
          <Link to="/signup-password" className="email__link-back">
            {' '}
            <img src="/src/img/back-button.svg"></img>
          </Link>
          <h1 className="signup__title signup__title-signup">Подтверждение Email</h1>
        </div>
        <article className="signup__message">
          На почту <span className="email__message-span">указанную при регистрации</span> мы отправили письмо
          с подтверждением. Для завершения регистрации пройдите по ссылке в письме
        </article>
        <Link to="/signup_help" className="email__text">
          {' '}
          Не получили письмо?
        </Link>
      </div>
    </section>
  );
};

export default Signup__confirmation;
