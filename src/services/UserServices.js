import axios from "axios"

const USER_API_BASE_URL = "http://localhost:8090/student/1"

class UserService {
    getStudent(){
        return axios.get(USER_API_BASE_URL)
    }
}

export default new UserService()