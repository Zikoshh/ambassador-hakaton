import { Link } from 'react-router-dom';
import './Signup__help.css';

const Signup__help = () => {
    return (
        <section className="login email__help">
            <div className="email__help-cover"></div>
            <div className="email__container email__container-help">
                <Link to="/" className="email__close-button">
                    {' '}
                    <img src="/src/img/close-button.svg"></img>
                </Link>
                <h1 className="email__title email__title-help">Что делать, если письмо не пришло?</h1>
                <ul className="email__list">
                    <li>Проверить правильно ли указана почта;</li>
                    <li>Посмотреть папку «спам»;</li>
                    <li>Если ничего не помогло, обратитесь к вашему системному администратору.</li>
                </ul>
            </div>
        </section>
    );
};

export default Signup__help;
