<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
              <img src="../assets/img/404.png" alt="eror" class="w-100">
              <h2 class="text-center">Page not found!</h2>
              <hr class="bg-secondary w-50 mx-auto">
              <div>
                  <router-link to="/" class="nolink">
                    <h5 class="bg-brown button mx-auto"><i class="fa-solid fa-house"></i>Home</h5>
                  </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'error'
}
</script>

<style scoped>
    .button{
        width: fit-content;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
    i{
        margin-right: 5px;
        font-size: 85%;
    }
</style>