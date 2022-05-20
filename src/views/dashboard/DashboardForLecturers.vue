<template>
  <div class="container-fluid p-5 ">
    <div class="containr-fluid">
      <div class="row pt-5">
        <div class="col text-center" >
          <h2>Hello {{lecturer.name}}</h2>
          <h5>Welcome back !</h5>
        </div>
      </div>
    </div>
    <div class="container-fluid ">
      <div class="row pt-5">
        <h3 class="p-3" >Conducting courses</h3>
        <div class="new-course d-flex mb-1">
          <NewCourseModal id="new-course-modal" :lecturerId="lecturer.id" />
          <button class="btn mx-auto ms-md-auto me-md-0" data-bs-toggle="modal" data-bs-target="#new-course-modal">
            <i class="fa-solid fa-circle-plus"></i>Add new
          </button>
        </div>
        <div>
          <CourseCard
            v-for="conductingCourse in conductingCourses"
            :id="conductingCourse.course_id"
            :key="conductingCourse.course_id"
            :code="conductingCourse.course_code"
            :title="conductingCourse.name"
            :lecturer="conductingCourse.lecturer.name"
            :description="conductingCourse.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import CourseCard from '@/components/Card.vue'

import userService from '@/services/UserServices.js'
import lecturerService from '@/services/LecturerService'
import CourseService from '@/services/CourseService'
import Announcements from '@/components/Announcements.vue'
import NewCourseModal from '@/components/NewCourseModal.vue'


export default {
  name: 'DashboardForLectures',
  components: {
    CourseCard,
    Announcements,
    NewCourseModal
  },

  data(){
    return{
      conductingCourses: [],
      lecturer: {}
    }
  },

  methods:{
    initDashboard(){
      lecturerService.getOtherConductingCources(
        userService.getUserDetails().id,userService.getToken()
      ).then(res=>{
        this.conductingCourses = res
      }).catch(err=>{
        console.log(err)
      })
      

      lecturerService.getLecturerDetails(
        userService.getUserDetails().id,
        userService.getToken()
      ).then(res => {
        this.lecturer = res
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.initDashboard()
  }

}
</script>
<style>
h2{
  font-size:4vh;
  font-weight:bold;
}
h3{
  font-size:3vh;
  font-weight:bold;
  color: #946B2D;
}
h5{
  font-size: 3vh;
  color: #946B2D;
  font-weight: bold;
}
.announcements{
  
  padding: 3vh;
  height: 30vh;
  border-radius: 3vh;
  position:static;
}
.announcements h3{
  color: black;
}
.announcements .announcement{
  height: 80%;
  overflow-y:scroll;
}
.courses hr{
  border: 2px solid black;
  border-color: black;
}
.new-course .btn{
  border: solid 2px #946B2D;
  color: #946B2D;
  transition: 0.1s;
}
.new-course .btn:hover{
  background-color: #946B2D;
  color: white;
}
i{
  margin-right: 8px;
}
</style>