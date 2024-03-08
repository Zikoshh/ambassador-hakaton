import './ProfileOutPopup.css';

export default function ProfileOutPopup({isOpenOutPopup, handleAllPopupClose}) {
  const profileOutClassName = `profile-out-popup ${isOpenOutPopup && 'profile-out-popup_open'}`;
  return (
    <div className={profileOutClassName}>
      <p className="profile-out-popup__text">Вы действительно хотите выйти из CRM?</p>
      <div className="profile-out-popup__buttons">
        <button className="profile-out-popup__left">Выйти</button>
        <button className="profile-out-popup__right" onClick={handleAllPopupClose}>Отмена</button>
      </div>
    </div>
  )
}
