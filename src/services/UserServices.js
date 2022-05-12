import axios from "axios"
import { Buffer } from "buffer"
import LocalStorageManager from "./LocalStorageManager"

class UserService {
    UserType = {
        ADMIN: "ADMIN",
        LECTURER: "LECTURER",
        STUDENT: "STUDENT"
    }

    constructor() {
        this.localStorageManager = new LocalStorageManager()
    }

    async signin(formData) {
        return axios.post('login',
            formData
        ).then((res) => {
            this.localStorageManager.setToken(res.data.access_token)
            this.localStorageManager.setRefreshToken(res.data.refresh_token)
            return res
        }).catch((err) => {
            throw err
        })
    }

    async getEnrolledCourses(studentId, token) {
        return axios.get(`student/${studentId}/courses`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }

    isSigned() {
        return this.localStorageManager.isTokenAvailable
    }

    getToken() {
        return this.localStorageManager.token
    }

    signout() {
        this.localStorageManager.removeAllTokens()
    }

    getUserDetails() {
        if (!this.isSigned()) {
            return { err: "signin first" }
        }
        const tokenDecodablePart = this.localStorageManager.token.split('.')[1];
        const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
        return JSON.parse(decoded)
    }
}

export default new UserService()