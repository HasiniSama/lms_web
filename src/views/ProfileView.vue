<template>
  <div class="container profile p-5">
    <div class="row justify-content-center">
          <div class="col-md-4 ">
            <img src="../assets/owl.png" alt="">
          </div>
          <div class="sub-head p-2">
            <h3  id="name">Tharushi Chamalsha</h3>
            <h4  id="studentId">SE/2018/045</h4>
          </div>

<div class="tabs">
  <div class="tab-2">
    <label for="tab2-1">One</label>
    <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
    <div>
      <h4>Tab One</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas. <a class="documentation" href="https://flkt.mx/pitaya/componentes.html#pestanias">Documentación en español</a>.</p><p>Donec interdum ante ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a varius. Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet nunc, finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.</p>
    </div>
  </div>
  <div class="tab-2">
    <label for="tab2-2">Two</label>
    <input id="tab2-2" name="tabs-two" type="radio">
    <div>
      <h4>Tab Two</h4>
      <p>Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque varius elit in neque ornare commodo ac non tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi tristique lorem eget iaculis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean at tellus eget risus tempus ultrices. Nam condimentum nisi enim, scelerisque faucibus lectus sodales at.</p>
    </div>
  </div>
</div>
          
          <div class="col-md-7">
            <p class="" data-aos="fade-down">I am a goal-oriented individual with the ability to cope up with any responsibility and duty given to me. 
              I have the capability of interacting with various types of people and working together as a team
               with having a good team spirit..</p>
            </div>
    </div>
  </div>
</template>

<style scoped>

.profile .sub-head h3{
    color: black;
}


h1 {
  font-size: 40px;
  line-height: 0.8em;
  color: rgba(255,255,255,0.2);}
.made-with {
    background: #fd264f;
    color: #fff;
    display: block;
    font-size: 12px;
    line-height: 1em;
    margin: 0;
    padding: 5px 110px;
    position: fixed;
    top: 20px;
    right: -100px;
    text-align: center;
    text-decoration: none;
    transform: rotate(45deg);
}
.documentation {
    color: #fd264f;
}
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none; }

.tabs {
  display: block;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  overflow: hidden; }
  .tabs [class^="tab"] label,
  .tabs [class*=" tab"] label {
    color: #efedef;
    cursor: pointer;
    display: block;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1em;
    padding: 2rem 0;
    text-align: center; }
  .tabs [class^="tab"] [type="radio"],
  .tabs [class*=" tab"] [type="radio"] {
    border-bottom: 1px solid rgba(239, 237, 239, 0.5);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out; }
    .tabs [class^="tab"] [type="radio"]:hover, .tabs [class^="tab"] [type="radio"]:focus,
    .tabs [class*=" tab"] [type="radio"]:hover,
    .tabs [class*=" tab"] [type="radio"]:focus {
      border-bottom: none;}
    .tabs [class^="tab"] [type="radio"]:checked,
    .tabs [class*=" tab"] [type="radio"]:checked {
      border-bottom: 2px solid #fd264f; }
    .tabs [class^="tab"] [type="radio"]:checked + div,
    .tabs [class*=" tab"] [type="radio"]:checked + div {
      opacity: 1; }
    .tabs [class^="tab"] [type="radio"] + div,
    .tabs [class*=" tab"] [type="radio"] + div {
      display: block;
      opacity: 0;
      padding: 2rem 0;
      width: 90%;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out; }
  .tabs .tab-2 {
    width: 50%; }
    .tabs .tab-2 [type="radio"] + div {
      width: 200%;
      margin-left: 200%; }
    .tabs .tab-2 [type="radio"]:checked + div {
      margin-left: 0; }
    .tabs .tab-2:last-child [type="radio"] + div {
      margin-left: 100%; }
    .tabs .tab-2:last-child [type="radio"]:checked + div {
      margin-left: -100%; }

</style>
<script>


</script>