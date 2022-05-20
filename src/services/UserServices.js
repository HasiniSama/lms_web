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

    async signup(form) {
        return axios.post('signup', {
            id: '',
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }

    async enroll(studentId, courseId, token) {
        return axios.post(`student/${studentId}/enroll/${courseId}`, {}, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
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

    async getStudentDetails(studentId, token) {
        return axios.get(`student/${studentId}`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async hasAccess(courseId) {
        return axios.get(`student/${this.getUserDetails().id}/courses`, {
            headers: { "Authorization": `Bearer ${this.getToken()}` },
        }).then((res) => {
            return res.data.findIndex(item => { return item.course_id == courseId }) != -1
        }).catch((err) => {
            throw err
        })
    }

    async getMarks(studentId, courseId) {
        return axios.get(`student/student/${studentId}/course/${courseId}`, {
            headers: { "Authorization": `Bearer ${this.getToken()}` },
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

    async signout() {
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