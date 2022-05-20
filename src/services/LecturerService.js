import axios from "axios"

class LecturerService {
    async getOtherConductingCources(lecturerId, token) {
        return axios.get(`course/all`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data.filter(item => {
                return item.lecturer.id == lecturerId
            })
        }).catch((err) => {
            throw err
        })
    }
    async getConductingCourses(lecturerId, token) {
        return axios.get(`lecturer/${lecturerId}/courses`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }
    async getLecturerDetails(lecturerId, token) {
        return axios.get(`lecturer/${lecturerId}`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
    async hasAccess(lecturerId, courseId, token) {
        return axios.get(`course/all`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            var index = res.data.filter(item => {
                return item.lecturer.id == lecturerId
            }).findIndex(i => { return i.course_id == courseId })

            return index == -1 ? false : true
        }).catch((err) => {
            throw err
        })
    }
    async addAnnouncement(announcement, courseId, token) {
        return axios.post(`lecturer/${courseId}/announcement`,
            announcement, {
                headers: { "Authorization": `Bearer ${token}` }
            }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
    async getEnrolledStudents(courseId, token) {
        return axios.get(`lecturer/${courseId}/students`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
    async assignMarks(courseId, studentId, marks, token) {
        return axios.post(`lecturer/${courseId}/student/${studentId}/mark/${marks}`, { title: "put marks" }, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }
}

export default new LecturerService()