<template>
  <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/carousel_01.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel_02.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel_03.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container my-5 d-grid gap-5">
    <div class="p-5 border">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit totam hic sint! Veritatis illo ipsam quaerat, sit nam temporibus voluptatibus! Aut dolorum, commodi cumque inventore eum suscipit similique blanditiis.
      </p>
    </div>
    <div class="p-5 border">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit totam hic sint! Veritatis illo ipsam quaerat, sit nam temporibus voluptatibus! Aut dolorum, commodi cumque inventore eum suscipit similique blanditiis.
      </p>
    </div>
    <div class="p-5 border">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit totam hic sint! Veritatis illo ipsam quaerat, sit nam temporibus voluptatibus! Aut dolorum, commodi cumque inventore eum suscipit similique blanditiis.
      </p>
    </div>
    <div class="p-5 border">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit totam hic sint! Veritatis illo ipsam quaerat, sit nam temporibus voluptatibus! Aut dolorum, commodi cumque inventore eum suscipit similique blanditiis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
