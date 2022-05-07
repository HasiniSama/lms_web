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
                <section class="mt-5">
                    <h2>Enrollment</h2>
                    <hr>
                    <p class="text-gray">Click the following button to self-enroll to this course.</p>
                    <button class="btn bg-brown enroll-btn px-3 mx-auto"><strong>Enroll me</strong></button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseDetailsForEveryone',
    props: {
        id: Number
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
    },
    computed: {
        lecName() {
            let names = this.lecturer.name.split(' ')
            if(names.length>0){
                return ""+names[0][0]+names[1][0]
            }else{
                return names[0][0]
            }
        }
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