<template>
    <section class="courses">
        <div class="container-fluid">
            <div class="row">
                <div class="courses-card justify-content-center bg-light-brown">
                    <img src="../assets/img/sample-img.png" class="card-img" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">{{Course.id}}</h4>
                        <h5 class="card-text">{{Course.title}}</h5>
                        <a href="#" class="btn btn-success">View Course</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

export default {
    name:"CardView",

    data(){
        return{
            Course:{
            title:"Loading...",
            id:"SENG 12213"
            }
        }
    },

    props:{
        id:String,
        courseTitle:String
    }

}
</script>


<style scoped>
    .courses-card {
        position: relative;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
        padding: 20px;
        border-radius: 15px;
    }
</style>