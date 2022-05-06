<template>
  <NavBarVue/>
  <div class="home">
    <HelloWorld/>
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
