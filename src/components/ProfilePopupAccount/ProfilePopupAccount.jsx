import './ProfilePopupAccount.css';
export default function ProfilePopupAccount({ isProfilePopupAccount }) {
    const profileAccountClassName = `account-popup ${isProfilePopupAccount && 'account-popup_open'}`;
    console.log(isProfilePopupAccount);
    return (
        <div className={profileAccountClassName}>
            <div className="account-popup__header">
                <p className="account-popup__header-text">Личный кабинет</p>
                <img src="#" className="account-popup__header-image" alt="Button close" />
            </div>
            <div className="account-popup__body">
                <div className="account-popup__user">
                    <img src="#" className="account-popup__image" alt="Button close" />
                    <div className="account-popup__user-data">
                      <p className="account-popup__name">Анна Белова</p>  
                    </div>
                </div>
            </div>
        </div>
    );
}
