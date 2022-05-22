import axios from "axios"

class CourseService {
    async createNewCourse(course, token) {
        return axios.post(`course/add`,
            course, {
                headers: { "Authorization": `Bearer ${token}` }
            }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getCourseDetails(courseId, token) {
        return axios.get(`course/${courseId}`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getAnnouncements(courseId, token) {
        return axios.get(`course/${courseId}/announcements`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getAllCourses(token) {
        return axios.get(`course/all`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
}

export default new CourseService()