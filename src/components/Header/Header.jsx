import './Header.css';
import headerImage from '../../assets/logo.svg';
import headerButtonLeft from '../../assets/header-button-left.svg';
import headerButtonRight from '../../assets/header-button-right.svg';

const Header = () => {
    // TODO: сделать заливку общего фона
    return (
        <header className="header">
            <div className="header-logo">
                <img src={headerImage} className="header-logo__image" alt="Button close" />
                <p className="header-logo__text">CRM Ambassador</p>
            </div>
            <div className="header__buttons">
                <img src={headerButtonLeft} className="header__button_left" alt="Button close" />
                <img src={headerButtonRight} className="header__button_right" alt="Button close" />
            </div>
        </header>
    );
};

export default Header;
