class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.json()}`);
    }
  
    checkAuthorization() {
      // проверка авторизации пользователя при заходе на сайт
      return fetch(`${this._baseUrl}`, {
        headers: this._headers,
        credentials: 'include' // отправка cookie вместе с запросом
      }).then(this._checkResponse);
    }
  
    signup(obj) {
      return fetch(`${this._baseUrl}signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          firstname: obj.firstname,
          lastname: obj.lastname,
          mobilePhone: obj.mobilePhone,
          password: obj.password,
          email: obj.email
        }),
        credentials: 'include'
      }).then((res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
      });
    }
  
    signin(obj) {
      return fetch(`${this._baseUrl}signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          password: obj.password,
          email: obj.email,
          checked: obj.checked
        }),
        credentials: 'include'
      }).then((res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
      });
    }
  
    logout() {
      return fetch(`${this._baseUrl}logout`, {
        headers: this._headers,
        credentials: 'include'
      }).then(this._checkResponse);
    }
  
    updateProfile(obj) {
      return fetch(`${this._baseUrl}users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: obj.name,
          email: obj.email
        }),
        credentials: 'include'
      }).then((res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
      });
    }
  
    getUser() {
      //загрузка данных о пользователе с сервера
      return fetch(`${this._baseUrl}users/me`, {
        headers: this._headers,
        credentials: 'include'
      }).then(this._checkResponse);
    }
  }
  
  export const mainApi = new Api({
    baseUrl: `${window.location.protocol}//185.23.236.87/api/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });
  