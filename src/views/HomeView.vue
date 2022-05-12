<template>
  <NavBarVue/>
  <div class="home">
    <HelloWorld/>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBarVue from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarVue,
    Footer
  }
}
</script>
