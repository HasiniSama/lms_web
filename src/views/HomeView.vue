<template>
  <NavBarVue />
  <DashboardForStudents v-if="isStudent" />
  <DashboardForLecturers v-else />
  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBarVue from '@/components/NavBar.vue'
import CourseCard from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

import userService from '@/services/UserServices.js'
import courseService from '@/services/CourseService.js'
import studentService from '@/services/StudentService.js'
import DashboardForStudents from './dashboard/DashboardForStudents.vue'
import DashboardForLecturers from './dashboard/DashboardForLecturers.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarVue,
    Footer,
    CourseCard,
    DashboardForStudents,
    DashboardForLecturers
  },

  data(){
    return{
      enrolledCourses: [],
      student: {}
    }
  },

  
  computed: {
    isStudent(){
      return userService.getUserDetails().role == userService.UserType.STUDENT
     
    }
  },

  

}
</script>
