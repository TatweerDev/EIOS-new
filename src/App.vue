<template>
  <div class="wrapper">
    <nav-sidebar></nav-sidebar>
  </div>
</template>

<script>
import NavSidebar from './components/NavSidebar.vue'

export default {
  name: 'App',
  components: { NavSidebar } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');


html, button {
  font-family: 'Montserrat', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #fff;
}

ul {
  list-style: none;
}

.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

</style>
