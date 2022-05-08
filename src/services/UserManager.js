module.exports = class UserManager {

    #TOKEN_KEY;
    #REFRESH_TOKEN_KEY;

    constructor() {
        this.#TOKEN_KEY = 'user_token'
        this.#REFRESH_TOKEN_KEY = 'refresh_token'
        this.cookies = require('vue-cookies')
        this.token = this.cookies.get(this.#TOKEN_KEY)
        this.refreshToken = this.cookies.get(this.#REFRESH_TOKEN_KEY)
        this.isSigned = this.token != null
    }

    setToken(token) {
        this.token = token
        this.isSigned = true
        this.cookies.set(this.#TOKEN_KEY, token)
    }

    setRefreshToken(token) {
        this.refreshToken = token
        this.cookies.set(this.#REFRESH_TOKEN_KEY, token)
    }

    removeAllTokens() {
        this.token = null
        this.refreshToken = null
        this.isSigned = false
        this.cookies.remove(this.#TOKEN_KEY)
        this.cookies.remove(this.#REFRESH_TOKEN_KEY)
    }
}