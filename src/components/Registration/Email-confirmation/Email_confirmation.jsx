import { Link } from 'react-router-dom';
import './Email_confirmation.css';

const Email_confirmation = () => {
  return (
    <section className="email">
      <div className="email__container">
        <div className="email__title-container">
          <Link to="/signup-password" className="email__link-back">
            {' '}
            <img src="/src/img/back-button.svg"></img>
          </Link>
          <h1 className="email__title email__title-signup">Подтверждение Email</h1>
        </div>
        <article className="email__message">
          На почту mymail@yandex.ru мы отправили письмо с подтверждением. Для завершения регистрации
          пройдите по ссылке в письме
        </article>
        <Link to="/signup-help" className="email__text">
          {' '}
          Не получили письмо?
        </Link>
      </div>
    </section>
  );
};

export default Email_confirmation;
