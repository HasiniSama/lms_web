import axios from "axios"

class StudentService{

    async getMarks(studentId,courseId,token) {
        return axios.get(`student/${studentId}/course/${courseId}`, {
            headers: { "Authorization": `Bearer ${token}` },
        }).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
    

}