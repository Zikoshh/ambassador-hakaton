import { Link } from 'react-router-dom';
import './Password_restore.css';

const Password_restore = () => {
    return (
        <section className="password">
            <div className="password__container">
                <div className="password__title-container">
                    <Link to="/signin-password" className="password__link-back">
                        {' '}
                        <img src="/src/img/back-button.svg"></img>
                    </Link>
                    <h1 className="password__title password__title-signup">Восстановление пароля</h1>
                </div>
                <article className="password__message">
                    На почту <span className="password__message-span">mymail@yandex.ru</span> мы отправим письмо со ссылкой на личный
                    кабинет, в котором вы сможете восстановить пароль
                </article>
                <Link to="/" className="password__button password__button-confirm">
                    {' '}
                    Отправить письмо
                </Link>
                <Link to="/" className="password__button password__button-cancel">
                    {' '}
                    Отмена
                </Link>
            </div>
        </section>
    );
};

export default Password_restore;
