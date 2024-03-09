const Login_step1 = ({error, isTyping, clearEmail, emailValid, email}) => {
    return (
        <label className="email__label">
            Email
            <div className="email__label-container">
              <input
                className={`email__input ${!emailValid ? 'error' : ''}`}
                placeholder="mail@yandex.ru"
                value={email}
                onChange={e => {
                  handleTyping(e);
                  setEmail(e.target.value);
                  setIsTyping(true);
                  setEmailValid(true);
                }}
              />
              {error && (
                <img
                  src="/src/img/icon-errorRed.svg"
                  alt={isTyping ? 'Серый крестик' : 'Красный крестик'}
                  className="email__input-error"
                  onClick={clearEmail}
                />
              )}
              {error && <span className="email__span">{error}</span>}
            </div>
          </label>
)
}


export default Login_step1;