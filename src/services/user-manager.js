module.exports = class UserManager {
    constructor() {}
    static token = localStorage.getItem('user_token')
    static refreshToken = localStorage.getItem('refresh_token')

    static setToken(token) {
        localStorage.setItem('user_token', token)
    }
    static setRefreshToken(token) {
        localStorage.setItem('refresh_token', token)
    }

    static isSigned = localStorage.getItem('user_token') != null

    static signout() {
        localStorage.setItem('user_token', null)
        localStorage.setItem('refresh_token', null)
    }
}