<template>
  <div class="container-fluid p-5">
    <div class="containr-fluid">
      <div class="row pt-5">
        <div class="col text-center" >
          <h2>Hello {{student.name}}</h2>
          <h5>Welcome back !</h5>
        </div>
      </div>
      <div class="row justify-content-center pt-5">
        <div class="col-md-6">
          <div class="announcements pt-4 bg-light ">
            <h3 class="text-center pb-2">Announcements</h3>
            <div class="announcement">
               <Announcements 
              v-for="announcement in announcements"
              :key="announcement.id"
              :subject="announcement.course.course_code"
              :announcement="announcement.description"
            />
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div class="container courses">
      <div class="row">
        <h3 class="" >Enrolled courses</h3>
        <div class="col-3"><hr></div>
        <div class="row pt-4">
          <CourseCard 
            v-for="enrolledCourse in enrolledCourses"
            :key="enrolledCourse.course_id"
            :id="enrolledCourse.course_id"
            :code="enrolledCourse.course_code"
            :title="enrolledCourse.name"
            :lecturer="enrolledCourse.lecturer.name"
            :description="enrolledCourse.description"
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
import Announcements from '@/components/Announcements.vue'
import CourseService from '@/services/CourseService'

export default {
  name: 'DashboardForStudents',
  components: {
    CourseCard,
    Announcements
  },

  data(){
    return{
      enrolledCourses: [],
      student: {},
      announcements: []
    }
  },

  methods:{
    initDashboard(){
      //getting enrolled courses
      userService.getEnrolledCourses(
        userService.getUserDetails().id,
        userService.getToken()
      ).then(res => {
        this.enrolledCourses=res.data

        res.data.forEach(course => {
          this.pushAnnouncements(course.course_id)
        });
      }).catch(err=>{
        console.log(err)
      })

      //getting student details
      userService.getStudentDetails(
        userService.getUserDetails().id,
        userService.getToken()
      ).then(res => {
        this.student = res
      }).catch(err => {
        console.log(err);
      })
    },

    pushAnnouncements(courseId){
      CourseService.getAnnouncements(courseId, userService.getToken()).then(res => {
        res.forEach(ann => {
          this.announcements.push(ann)
        })
      }).catch(err => {
        console.log(err);
      })
    },
  },

  created(){
    this.initDashboard()
    //this.hasAnnouncement(4)
  }

}
</script>
<style scoped>
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
  height: 70%;
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

</style>