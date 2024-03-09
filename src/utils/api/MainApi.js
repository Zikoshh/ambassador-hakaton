class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getProfiles(obj) {
      return fetch(`${this._baseUrl}ambassadors/`, {
        headers: this._headers,
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
  