<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 px-auto px-md-5">
                <h2>Course name</h2>
            </div>
            <div class="col-md-3 bg-light">Hello there</div>
            <div class="col-md-9">
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
                        <EmptyState title="No announcements found!" />
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <section>
                            <h2>Course Details</h2>
                            <hr>
                            <h5 class="text-gray">Course name: {{name}}</h5>
                            <h5 class="text-gray">Course code: {{code}}</h5>
                            <h5 class="text-gray">Lecturer: {{lecturer.name}}</h5>
                            <p class="text-gray">{{description}}</p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'

export default {
    name: 'CourseDetailsForEnrolledstudents',
    components: {
        EmptyState
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
            }
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