<template>
    <div class="container-fluid px-auto px-md-5">
        <div class="row">
            <div class="col-12 bg-light mb-2 mt-3">
                <h2>{{name}}</h2>
            </div>
            <div class="col-md-9 mt-3">
                <nav class="ps-auto ps-md-0">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Activity</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Announcements</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Details</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <EmptyState class="mt-3" title="No avtivity found!" />
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="d-flex  mb-3 new-announcement">
                            <NewAnnouncementModal id="new-announcement-modal" :courseId="id" :callback="updateAnnouncements" />
                            <button class="btn mx-auto ms-md-auto me-md-0 mt-2" data-bs-toggle="modal" data-bs-target="#new-announcement-modal">
                                <i class="fa-solid fa-scroll"></i> New Announcements
                            </button>
                        </div>
                        <EmptyState title="No announcements found!" v-if="isAnnouncementsEmplty" />
                        <div class="announcements" v-else>
                            <Accordion
                                v-for="a in announcements" 
                                :key="a.id" 
                                :id="a.id" 
                                :title="a.title" 
                                :description="a.description"
                            />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <section class="mt-3">
                            <h2>Course Details</h2>
                            <hr>
                            <h5 class="text-gray">Course name: {{name}}</h5>
                            <h5 class="text-gray">Course code: {{code}}</h5>
                            <h5 class="text-gray">Lecturer: {{lecturer.name}}</h5>
                            <p class="text-gray mt-3">{{description}}</p>
                        </section>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <h4 class="text-center mt-3">Conducting courses</h4>
                <div class="enrolled-courses mt-4">
                    <CourseListItem
                        v-for="course in conductingCourses"
                        :key="course.course_id"
                        :id="course.course_id"
                        :name="course.name"
                        :code="course.course_code"
                        @click="initComponent"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'
import CourseListItem from '@/components/CourseListItem.vue'
import Accordion from '@/components/Accordion.vue'
import NewAnnouncementModal from '@/components/NewAnnouncementModal.vue'

import userService from '@/services/UserServices.js'
import courseService from '@/services/CourseService.js'
import lecturerService from '@/services/LecturerService.js'

export default {
    name: 'CourseDetailsForEnrolledstudents',
    components: {
        EmptyState,
        CourseListItem,
        Accordion,
        NewAnnouncementModal
    },
    props: {
        id: String
    },
    data(){
        return{
            auth:{
                role: "",
                authorityCourses: ""
            },
            code: "SENG 12234",
            name: "Testing Mobile Applications",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque fugit deleniti rem dignissimos architecto rerum velit nam accusamus error beatae iure, nemo sapiente exercitationem qui tenetur facilis, aspernatur quod.",
            lecturer: {
                name: "John Doe"
            },
            conductingCourses: [],
            announcements: []
        }
    },
    methods: {
        updateAnnouncements(_title, _description) {
            this.announcements.push({id: this.announcements.length+1, title: _title, description: _description})
        },
        initComponent(){
            this.auth.role = userService.getUserDetails().role
            this.auth.authorityCourses = userService.getUserDetails().courses

            //course details
            courseService.getCourseDetails(
                this.id, userService.getToken()
            ).then(data => {
                this.code = data.course_code
                this.name = data.name
                this.description = data.description
                this.lecturer.name = data.lecturer.name
            }).catch(err => {
                console.log(err);
            })

            //announcements
            courseService.getAnnouncements(
                this.id, userService.getToken()
            ).then(data => {
                this.announcements = data
            }).catch(err => {
                console.log(err)
            })

            //other cources
            lecturerService.getOtherConductingCources(
                userService.getUserDetails().id, userService.getToken()
            ).then(data => {
                this.conductingCourses = data.filter(item => {return item.course_id != this.id})
            }).catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        isAnnouncementsEmplty(){
            return this.announcements.length == 0
        }
    },
    created(){
        if(!userService.isSigned){
            this.$router.push('/signin')
            return
        }
        lecturerService.hasAccess(
            userService.getUserDetails().id,
            this.id,
            userService.getToken()
        ).then(res => {
            console.log(res);
            if(!res){
                alert("You don't have access to this course!")
            }
        })
        this.initComponent()
    }
}
</script>

<style scoped>
    .nav-link{
        color: rgb(126, 126, 126);
    }
    .nav-link.active{
        color: #946B2D;
    }

    .new-announcement .btn{
        border: solid 2px #946B2D;
        color: #946B2D;
        transition: 0.1s;
    }
    .new-announcement .btn:hover{
        background-color: #946B2D;
        color: white;
    }
</style>