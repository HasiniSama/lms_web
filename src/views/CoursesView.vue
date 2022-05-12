<template>
    <NavBarVue/>
    <section class="courses">
        <div class="container-fluid">
            <h1>All Courses</h1>
            <div class="row">
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
            <div class="row">
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

import userService from '@/services/UserServices.js'
import courseService from '@/services/CourseService.js'

export default {
    name: 'Courses',
    components: {
        NavBarVue,
        CardVue
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
                console.log(allCourses);
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
        font-size: 28px;
        text-align: center;
        padding: 60px 0;
    }
</style>