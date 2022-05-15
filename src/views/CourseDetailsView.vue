<template>
    <NavBarVue />
    <section class="page-content pb-3">
        <div class="text-center pt-5" v-if="!loadingCompleted">
            <div class="spinner-border mt-5" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <CourseDetailsViewForEveryone :id="id" v-if="isStudentNotEnrolled" :showEnrollOption="true" />
            <CourseDetailsForEnrolledStudents :id="id" v-else-if="isStudentEnrolled" />
            <CourseDetailsForConductingLecturers :id="id" v-else-if="isLecturerConducting" />
            <CourseDetailsViewForEveryone :id="id" v-else-if="isLecturerNotConducting" :showEnrollOption="false" />
        </div>
    </section>
</template>

<script>
// import nav bar
import NavBarVue from '@/components/NavBar.vue'

// import course views
import CourseDetailsViewForEveryone from './course/CourseDetailsViewForEveryone.vue'
import CourseDetailsForEnrolledStudents from './course/CourseDetailsViewForEnrolledStudents.vue'
import CourseDetailsForConductingLecturers from './course/CourseDetailsForConductingLecturers.vue'

import userService from '@/services/UserServices.js'
import lectureService from '@/services/LecturerService.js'

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
            id: this.$route.params.id,
            role: "",
            hasAccess: "",
            loadingCompleted: false
        }
    },
    computed: {
        isStudentEnrolled(){
            return this.role == userService.UserType.STUDENT && this.hasAccess
        },
        isStudentNotEnrolled(){
            return this.role == userService.UserType.STUDENT && !this.hasAccess
        },
        isLecturerConducting(){
            return this.role == userService.UserType.LECTURER && this.hasAccess
        },
        isLecturerNotConducting(){
            return this.role == userService.UserType.LECTURER && !this.hasAccess
        }
    },
    created() {
        this.role = userService.getUserDetails().role

        if(this.role == userService.UserType.LECTURER){
            lectureService.hasAccess(userService.getUserDetails().id, this.id, userService.getToken()).then(res => {
                this.loadingCompleted = true
                this.hasAccess = res
            }).catch(err => {
                console.log(err)
            })
        }else if(this.role == userService.UserType.STUDENT){
            userService.hasAccess(this.id).then(res => {
                this.loadingCompleted = true
                this.hasAccess = res
            }).catch(err => {
                console.log(err)
            })
        }

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