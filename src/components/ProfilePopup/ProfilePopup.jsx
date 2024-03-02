import "./ProfilePopup.css";
import profileImage from "../../assets/logo.svg";

export default function ProfilePopup() {
  return (
    <div className="profile-popup">
      <div className="profile-popup__container">
        <img
          src={profileImage}
          className="profile-popup__image"
          alt="Button close"
        />
        <p className="profile-popup__account">Анна Белова</p>
        <p className="profile-popup__email">email@email.com</p>
      </div>
      <div className="profile-popup__buttons">
        <button className="profile-popup__button">Личный кабинет</button>
        <button className="profile-popup__button">Выход</button>
      </div>
    </div>
  );
}
