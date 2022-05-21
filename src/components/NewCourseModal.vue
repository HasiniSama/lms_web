<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Course</h5>
                <button type="button" id="newCoursemodalCloseBtn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="post" @submit.prevent="create">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="a-title" class="form-label">Course name</label>
                        <input type="text" v-model="course.name" class="form-control" id="a-title" required>
                    </div>
                    <div class="mb-3">
                        <label for="a-title1" class="form-label">Course code</label>
                        <input type="text" v-model="course.course_code" class="form-control" id="a-title1" required>
                    </div>
                    <div class="mb-3">
                        <label for="a-body" class="form-label">Description</label>
                        <textarea class="form-control" v-model="course.description" id="a-body" rows="4" required></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn py-1">Create</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import userService from '@/services/UserServices.js'
import CourseService from '@/services/CourseService.js'

import Swal from 'sweetalert2'

export default {
    name: 'NewCourseModal',
    props:{
        id: String,
        lecturerId: String
    },
    data(){
        return{
            course:{
                course_id: "",
                name: "",
                course_code: "",
                description: ""
            }
        }
    },
    methods: {
        create(){
            CourseService.createNewCourse(
                this.course, 
                userService.getToken()
            ).then(res => {
                document.getElementById('newCoursemodalCloseBtn').click()
                this.$router.go(0)
            }).catch(err => {
                if(err.response.status == 403){
                    Swal.fire(
                        'Oops!',
                        'Course code already exsists!',
                        'error'
                    )
                }
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .btn{
        border: solid 2px #946B2D;
        color: #946B2D;
        transition: 0.1s;
    }
    .btn:hover{
        background-color: #946B2D;
        color: white;
    }
    label{
        margin-bottom: 0;
    }
</style>