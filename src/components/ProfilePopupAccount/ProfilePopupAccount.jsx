import './ProfilePopupAccount.css';
import popupCloseIcon from '../../img/icon-popup-close.svg';
import avatarIcon from '../../img/Persona.png';
import avatarIconButton from '../../img/avatar-icon-button.svg';
export default function ProfilePopupAccount({ isProfilePopupAccount, handleAllPopupClose }) {
    const profileAccountClassName = `account-popup ${isProfilePopupAccount && 'account-popup_open'}`;
    console.log(isProfilePopupAccount);
    return (
        <div className={profileAccountClassName}>
            <div className="account-popup__header">
                <p className="account-popup__header-text">Личный кабинет</p>
                <img src={popupCloseIcon} className="account-popup__header-image" alt="Button close" onClick={handleAllPopupClose} />
            </div>
            <div className="account-popup__body">
                <div className="account-popup__user">
                    <img src={avatarIcon} className="account-popup__image" alt="Account avatar" />
                    <img src={avatarIconButton} className="account-popup__image-change" alt="Account avatar" />
                    <div className="account-popup__user-data">
                        <p className="account-popup__name">Анна Белова</p>
                        <p className="account-popup__email">annabelova@yandex.ru</p>
                    </div>
                </div>
                <form action="" className="account-form">
                    <p className="account-form__input-name">ФИО</p>
                    <input className="account-form__input" type="text" name="fio" required placeholder="ФИО" value="Белова Анна"></input>
                    <p className="account-form__input-name">Должность</p>
                    <input className="account-form__input" type="text" name="job" required placeholder="Должность" value="Менеджер"></input>
                    <button className="account-form__button">Сменить пароль</button>
                    <div className="account-form__buttons">
                        <button className="account-form__button-reset">Сменить пароль</button>
                        <button className="account-form__button-save">Сохранить</button>  
                    </div>
                </form>
            </div>
        </div>
    );
}
