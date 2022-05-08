<template>
    <NavBarVue />
    <section class="page-content">
        <!-- <CourseDetailsViewForEveryone :id="id" /> -->
        <!-- <CourseDetailsForEnrolledStudents :id="id" /> -->
        <CourseDetailsForConductingLecturers :id="id" />
    </section>
</template>

<script>
// import nav bar
import NavBarVue from '@/components/NavBar.vue'

// import course views
import CourseDetailsViewForEveryone from './course/CourseDetailsViewForEveryone.vue'
import CourseDetailsForEnrolledStudents from './course/CourseDetailsViewForEnrolledStudents.vue'
import CourseDetailsForConductingLecturers from './course/CourseDetailsForConductingLecturers.vue'

export default {
    name: 'CourseDetails',
    components: {
        NavBarVue,
        CourseDetailsViewForEveryone,
        CourseDetailsForEnrolledStudents,
        CourseDetailsForConductingLecturers
    },
    data(){
        return{
            id: this.$route.params.id
        }
    },
    created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
          this.id = toParams.id
      }
    )
  },
}
</script>

<style scoped>

</style>