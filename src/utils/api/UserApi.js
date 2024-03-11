class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    signup(obj) {
        return fetch(`${this._baseUrl}signup/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                username: obj.username,
                email: obj.email,
                password: obj.password,
                confirm_password: obj.confirm_password
            })
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        });
    }

    getUserMe() {
        return fetch(`${this._baseUrl}users/me/`, {
            method: 'GET',
            headers: {...this._headers,
                authorization: `Bearer ${localStorage.getItem('access')}`,
            }
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        });
    }

    signin(obj) {
        return fetch(`${this._baseUrl}login/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: obj.password,
                email: obj.email
            })
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        });
    }
}

export const userApi = new Api({
    baseUrl: `${window.location.protocol}//185.23.236.87/api/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});
