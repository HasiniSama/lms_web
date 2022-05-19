<template>
    <NavBarVue/>
    <section class="courses">
        <div class="container-fluid">
            <h1>All Courses</h1>
            <div class="row mx-auto align-items-center">
                <CardVue
                    v-for="course in allCourses" :key="course.course_id"
                    :id="course.course_id"
                    :code="course.course_code" 
                    :title="course.name" 
                    :lecturer="course.lecturer.name"
                    :description="course.description"
                />
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import CardVue from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

import userService from '@/services/UserServices.js'
import courseService from '@/services/CourseService.js'

export default {
    name: 'Courses',
    components: {
        NavBarVue,
        CardVue,
        Footer
    },
    data(){
        return{
            allCourses: []
        }
    },
    methods: {
        initComponent(){
            //get all
            courseService.getAllCourses(
                userService.getToken()
            ).then(data => {
                this.allCourses = data
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        if(!userService.isSigned){
            this.$router.push('/signin')
            return
        }
        this.initComponent()
    }
}
</script>

<style scoped>
    .courses {
        background-color: #dddddd;
        padding: 30px 0;
    }
    .courses h1 {
        font-size: 30px;
        text-align: center;
        padding: 80px 0 20px 0;
        font-family: 'montserrat-bold';
    }
</style>