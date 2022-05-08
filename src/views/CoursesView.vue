<template>
    <!-- <NavBarVue/> -->
    <section class="courses">
        <div class="container-fluid">
            <div class="row">
                <h1> Hello Vinojan Abhimanyu..!</h1>
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

export default {
  name: 'Courses',
  components: {
    NavBarVue,
    CardVue
  }
}
</script>

<style scoped>
    img{
        width: 70%;
        height: auto;
    }
    .btn-brown{
        background-color: #946B2D;
        color: white;
    }
    .bottom-text{
        font-size: 0.9rem;
    }
    label{
        margin-bottom: 0;
    }
    span{
        font-weight: bold;
    }
    i{
        font-size: 85%;
        margin: auto 5px;
    }
</style>