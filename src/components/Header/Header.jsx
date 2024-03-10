import './Header.css';
import headerImage from '../../assets/logo.svg';
import headerButtonLeft from '../../assets/header-button-left.svg';
import headerButtonRight from '../../assets/header-button-right.svg';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import { useState } from 'react';


function Header() {
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [isProfilePopupOut, setIsProfilePopupOut] = useState(false);
    const [isProfilePopupAccount, setIsProfilePopupAccount] = useState(false);
    function handleProfileClick() {
        if (isProfilePopupOpen) {
            setIsProfilePopupOpen(false);
        } else {
            setIsProfilePopupOpen(true);
        }
    }
    function handleProfileOutClick() {
        setIsProfilePopupOpen(false);
        setIsProfilePopupOut(true);
    }
    function handleAllPopupClose(){
      setIsProfilePopupOpen(false);
      setIsProfilePopupOut(false);
      setIsProfilePopupAccount(false);
    }
    function handleProfileAccountClick(){
        setIsProfilePopupOpen(false);
        setIsProfilePopupAccount(true);

    }
    // TODO: сделать заливку общего фона
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={headerImage} className="header-logo__image" alt="Button close" />
                    <p className="header-logo__text">CRM Ambassador</p>
                </div>
                <div className="header__buttons">
                    <img src={headerButtonLeft} className="header__button_left" alt="Button close"/>
                    <img src={headerButtonRight} className="header__button_right" alt="Button close" onClick={handleProfileClick} />
                </div>
            </header>
            <ProfilePopup isOpen={isProfilePopupOpen} isOpenOutPopup={isProfilePopupOut} handleProfileOutClick={handleProfileOutClick}
              handleAllPopupClose={handleAllPopupClose}
              handleProfileAccountClick={handleProfileAccountClick}
              isProfilePopupAccount={isProfilePopupAccount}
            />
        </>
    );
}

export default Header;
