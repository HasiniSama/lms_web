<template>
  <div class="container-fluid p-5 ">
    <div class="containr-fluid">
      <div class="row pt-5">
        <div class="col text-center" >
          <h2>Hello {{lecturer.name}}</h2>
          <h5>Welcome back !</h5>
        </div>
      </div>
      <div class="row justify-content-center pt-5">
        <div class="col-md-6">
          <div class="announcements pt-4 bg-light ">
            <h3 class="text-center">Announcements</h3>
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
    <div class="container-fluid ">
      <div class="row pt-5">
        <h3 class="p-3" >Conducting courses</h3>
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
</template>
<script>
// @ is an alias to /src

import CourseCard from '@/components/Card.vue'

import userService from '@/services/UserServices.js'
import lecturerService from '@/services/LecturerService'
import CourseService from '@/services/CourseService'
import Announcements from '@/components/Announcements.vue'


export default {
  name: 'DashboardForLectures',
  components: {
    CourseCard,
    Announcements
  },

  data(){
    return{
      conductingCourses: [],
      lecturer: {},
      announcements:[]
    }
  },

  methods:{

    initDashboard(){
      // lecturerService.getConductingCources(
      //   userService.getUserDetails().id,
      //   userService.getToken()
      // ).then(res => {
      //  console.log(res)
      //   this.conductingCourses=res.data
      // }).catch(err=>{
      //   console.log(err)
      // })

      lecturerService.getOtherConductingCources(
        userService.getUserDetails().id,userService.getToken()
      ).then(res=>{
        this.conductingCourses = res

        res.forEach(course => {
           this.pushAnnouncements(course.course_id)
        });
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


</style>