class Auth {
    constructor() {
        this.authenticated = false;
    }

    isAuthenticated() {
        const authenticated = Boolean(localStorage.getItem('authenticated'));
        this.authenticated = authenticated === true;
        return authenticated;
    }

    setAuthenticationToLocalStorage(data) {
        const authenticated = data.user ? 1 : 0;
        localStorage.setItem('authenticated', authenticated);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.access_token);
    }

    getUserInfo() {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
}

export default new Auth();
