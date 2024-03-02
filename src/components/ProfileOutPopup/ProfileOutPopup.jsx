import './ProfileOutPopup.css';

export default function ProfileOutPopup() {
  return (
    <div className="profile-out-popup">
      <p className="profile-out-popup__text">Вы действительно хотите выйти из CRM?</p>
      <div className="profile-out-popup__buttons">
        <button className="profile-out-popup__left"></button>
        <button className="profile-out-popup__right"></button>
      </div>
    </div>
  )
}
