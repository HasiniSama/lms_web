import axios from "axios"
class LecturerService {
    async getOtherConductingCources(lecturerId, token) {
        return axios.get(`course/all`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data.filter(item => {
                return item.lecturer.id == lecturerId
            });
        }).catch((err) => {
            throw err
        })
    }
    async addAnnouncement(courseId, token) {
        return axios.post(`lecturer/${courseId}/announcement`, {
            headers: { "Authorization": `Bearer ${token}` },
            body: {
                title: "Test title",
                description: "Test description",
                course: courseId
            }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
}

export default new LecturerService()