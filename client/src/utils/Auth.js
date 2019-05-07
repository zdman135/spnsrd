import decode from 'jwt-decode';

export default {
  setToken: function (idToken) {
    localStorage.setItem('id_token', idToken)
  },
  getToken: function () {
    return localStorage.getItem('id_token')
  },
  logout: function () {
    localStorage.removeItem('id_token');
  },
  getProfile() {
    return decode(this.getToken());
  },
  isTokenExpired: function (token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      else
        return false;
    }
    catch (err) {
      return false;
    }
  },
  loggedIn: function() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }
};
