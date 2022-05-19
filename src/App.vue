<template>
  <router-view/>
</template>

<style>
/* Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@font-face {
  font-family: "sf-pro";
  src: local("sf-pro"),
   url('assets/font/sf-pro.otf') format("truetype");
}
/* Apply global css classes */
@import url('assets/css/styles.css');
#app {
  font-family: 'sf-pro', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>