<template>
    
            <div class="col-md-3">
                <div class="courses-card justify-content-center bg-light-brown">
                    <img src="../assets/img/sample-img.png" class="card-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{title}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{code}}</h6>
                        <p class="card-text ">{{formattedDescription}}</p>
                        <h6 class="mt-1 card-subtitle mb-2">Conducted by :  {{lecturer}}</h6>
                        <router-link :to="'/course/'+id" class="mt-3 btn view-btn nav-link active" aria-current="page">View Course</router-link>
                    </div>
                </div>
            </div>
        
</template>

<script>
export default {
    name: 'Card',
    props: {
        id:Number,
        code: String,
        title: String,
        lecturer: String,
        description: String
    },
    computed: {
        formattedDescription(){
            return this.description.substring(0, 50) + "..."
        }
    }
}
</script>


<style scoped>
    .card-title {
        font-size: 24px;
        min-height: 65px;
        color: #0e1a40;
        font-family: 'montserrat-bold';
        font-weight: 300;
    }
    .courses-card {
        position: relative;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
        padding: 20px;
        border-radius: 15px;
    }
    .view-btn {
        background: #222f5b;
        width: 100%;
        color: #fff;
        transition: 0.3s;
        border-radius: 10px;
        font-size: 17px;
        letter-spacing: 0.8px;
    }
    .view-btn:hover {
        background: #0e1a40;
    }
</style>