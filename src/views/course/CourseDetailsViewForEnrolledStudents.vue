<template>
    <div class="container-fluid px-auto px-md-5">
        <div class="row">
            <div class="col-12 bg-light mt-3">
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
                        <EmptyState title="No avtivity found!" />
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                        <section>
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
                <h4 class="text-center mt-3">Other courses</h4>
                <div class="enrolled-courses mt-4">
                    <CourseListItem
                        v-for="course in enrolledCourses"
                        :key="course.id"
                        :id="course.id"
                        :name="course.name"
                        :code="course.code"
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

export default {
    name: 'CourseDetailsForEnrolledstudents',
    components: {
        EmptyState,
        CourseListItem,
        Accordion
    },
    props: {
        id: String
    },
    data(){
        return{
            code: "SENG 12234",
            name: "Testing Mobile Applications",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque fugit deleniti rem dignissimos architecto rerum velit nam accusamus error beatae iure, nemo sapiente exercitationem qui tenetur facilis, aspernatur quod.",
            lecturer: {
                name: "John Doe"
            },
            enrolledCourses: [
                {id: 1, name: "Course 1", code: "SENG 12321"},
                {id: 2, name: "Course 2", code: "SENG 12321"},
                {id: 3, name: "Course 3", code: "SENG 12321"},
            ],
            announcements: [
                {id: 1, title: "Course 1", description: "SENG 12321"},
                {id: 2, title: "Course 2", description: "SENG 12321"},
                {id: 3, title: "Course 3", description: "SENG 12321"},
                {id: 4, title: "Course 4", description: "SENG 12321"},
                {id: 5, title: "Course 5", description: "SENG 12321"},
                {id: 6, title: "Course 6", description: "SENG 12321"},
                {id: 7, title: "Course 7", description: "SENG 12321"},
            ]
        }
    },
    computed: {
        isAnnouncementsEmplty(){
            return this.announcements.length == 0
        }
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
</style>