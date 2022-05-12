<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2 class="text-center">Lecturer</h2>
                <div class="d-table mx-auto mt-3">
                    <div class="avatar">{{lecName}}</div>
                </div>
                <h4 class="text-gray mt-4 text-center">{{lecturer.name}}</h4>
            </div>
            <div class="col-md-8">
                <section></section>
                <section>
                    <h2>Course Details</h2>
                    <hr>
                    <h5 class="text-gray">Course name: {{name}}</h5>
                    <h5 class="text-gray">Course code: {{code}}</h5>
                    <p class="text-gray">{{description}}</p>
                </section>
                <section class="mt-5" v-if="showEnrollOption">
                    <h2>Enrollment</h2>
                    <hr>
                    <p class="text-gray">Click the following button to self-enroll to this course.</p>
                    <button class="btn bg-brown enroll-btn px-3 mx-auto" @click="enroll"><strong>Enroll me</strong></button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import userService from '@/services/UserServices.js'
import courseService from '@/services/CourseService.js'

export default {
    name: 'CourseDetailsForEveryone',
    props: {
        id: Number,
        showEnrollOption: Boolean
    },
    data(){
        return{
            code: "Loading...",
            name: "Loading...",
            description: "Loading...",
            lecturer: {
                name: "Loading..."
            }
        }
    },
    methods: {
        initComponent(courseId){
            //course details
            courseService.getCourseDetails(
                courseId, userService.getToken()
            ).then(data => {
                this.code = data.course_code
                this.name = data.name
                this.description = data.description
                this.lecturer.name = data.lecturer.name
            }).catch(err => {
                console.log(err)
            })
        },
        enroll(){
            userService.enroll(
                userService.getUserDetails().id, this.id, userService.getToken()
            ).then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        lecName() {
            let names = this.lecturer.name.split(' ')
            if(names.length>1){
                return ""+names[0][0]+names[1][0]
            }else{
                return names[0][0]
            }
        }
    },
    mounted(){
        if(!userService.isSigned){
            this.$router.push('/signin')
            return
        }
        this.initComponent(this.id)
    }
}
</script>

<style scoped>
    .avatar{
        background-color: #9b9b9b;
        width: 6rem;
        height: 6rem;
        clip-path: circle();
        text-align: center;
        text-transform: uppercase;
        font-size: 2rem;
        color: white;
        display: table-cell;
        vertical-align: middle;
        align-items: center;
    }
    .enroll-btn{
        background-color: #946B2D;
        color: white;
    }
</style>