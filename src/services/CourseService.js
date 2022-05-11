import axios from "axios"

class CourseService {
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
}

export default new CourseService()