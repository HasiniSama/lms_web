<template>
    <section class="courses">
        <div class="container-fluid">
            <div class="row">
                <div class="courses-card justify-content-center bg-light-brown">
                    <img src="../assets/img/sample-img.png" class="card-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{Course.title}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            title:"Loading..."
            }
        }
    },

    props:{
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