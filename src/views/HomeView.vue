<template>
  <NavBarVue/>
  <div class="container-fluid p-5">
    <div class="containr-fluid">
      <div class="row pt-5">
        <div class="col-md-6">
          <h2>Hello {{student.name}}</h2>
          <h5>Welcome back !</h5>
        </div>
        <div class="col-md-6">
          <div class="announcements p-4">
            <h3>Announcements</h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ">
      <div class="row pt-5">
        <h3 >Enrolled courses</h3>
        <div class="col-md-3 pt-3">
          <CourseCard />
        </div>
          <div class="col-md-3 pt-3">
          <CourseCard />
        </div>
          <div class="col-md-3 pt-3">
          <CourseCard />
        </div>
          <div class="col-md-3 pt-3">
          <CourseCard />
        </div>
      </div>
    </div>
  </div>
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

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarVue,
    Footer,
    CourseCard
  },

  data(){
    return{
      student:{
        name:"Loading..."
      }
    }
  },

  methods:{

    


  }

}
</script>
<style>

h2{
  font-size:4vh;
  font-weight:bold;
}
h5{
  font-size: 3vh;
  color: lightgray;
  font-weight: bold;
}
.announcements{
  background-color: lightgray;
  border-radius: 3vh;
}

</style>