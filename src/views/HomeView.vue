<template>
  <NavBarVue/>
  <div class="container-fluid p-5">
    <div class="containr-fluid">
      <div class="row pt-5">
        <div class="col-md-6">
          <h2>Hello Devid</h2>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBarVue from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarVue
  }
}
</script>
