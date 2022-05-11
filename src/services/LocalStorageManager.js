module.exports = class LocalStorageManager {

    #TOKEN_KEY;
    #REFRESH_TOKEN_KEY;

    constructor() {
        this.#TOKEN_KEY = 'user_token'
        this.#REFRESH_TOKEN_KEY = 'refresh_token'
        this.cookies = require('vue-cookies')
        this.token = this.cookies.get(this.#TOKEN_KEY)
        this.refreshToken = this.cookies.get(this.#REFRESH_TOKEN_KEY)
        this.isTokenAvailable = this.token != null
    }

    setToken(token) {
        this.token = token
        this.isTokenAvailable = true
        this.cookies.set(this.#TOKEN_KEY, token)
    }

    setRefreshToken(token) {
        this.refreshToken = token
        this.cookies.set(this.#REFRESH_TOKEN_KEY, token)
    }

    removeAllTokens() {
        this.token = null
        this.refreshToken = null
        this.isTokenAvailable = false
        this.cookies.remove(this.#TOKEN_KEY)
        this.cookies.remove(this.#REFRESH_TOKEN_KEY)
    }
}