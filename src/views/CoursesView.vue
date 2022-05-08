<template>
    <!-- <NavBarVue/> -->
    <section class="courses">
        <div class="container-fluid">
            <div class="row">
                <h1>Enrolled Courses</h1>
                <div class="col-sm-12 col-md-3 mx-auto align-items-center">
                    <CardVue/>
                </div>
                <div class="col-sm-12 col-md-3 mx-auto align-items-center">
                    <CardVue/>
                </div>
                <div class="col-sm-12 col-md-3 mx-auto align-items-center">
                    <CardVue/>
                </div>
                <div class="col-sm-12 col-md-3 mx-auto align-items-center">
                    <CardVue/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import CardVue from '@/components/Card.vue'

export default {
  name: 'Courses',
  components: {
    NavBarVue,
    CardVue
  }
}
</script>

<style scoped>
    .courses h1 {
        font-size: 28px;
        text-align: center;
        padding: 60px 0;
    }
</style>