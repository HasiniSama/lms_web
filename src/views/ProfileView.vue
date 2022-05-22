<template>
  <NavBar />
  <div class="container-fluid pt-5">
      <ProfileForStudents v-if="isStudent"/>
      <ProfileForLecturers v-else />
  </div>
  
  <Footer />
</template>

<style scoped>

</style>
<script>
import NavBar from '@/components/NavBar.vue'
import ProfileForStudents from './profile/ProfileForStudents.vue'
import Footer from '@/components/Footer.vue'
import ProfileForLecturers from './profile/ProfileForLecturers.vue'
import userService from '@/services/UserServices'


export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileForStudents,
    Footer,
    ProfileForLecturers
  },
  computed: {
    isStudent(){
      return userService.getUserDetails().role == userService.UserType.STUDENT
    }
  },
  mounted(){
    if(!userService.isSigned()){
      this.$router.push('/signin')
    }
  }
}
</script>