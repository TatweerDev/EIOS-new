<template>
  <div class="wrapper">
    <nav-sidebar></nav-sidebar>
    <div class="main-page-wrapper">
      <router-view ></router-view>
    </div>
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

a {
  text-decoration: none;
}

.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.main-page-wrapper {
  margin: 53px;
}

.page-title {
  margin-bottom: 39px;
}

.page-header {
  font-weight: normal;
  font-size: 27px;
  line-height: 33px;
}

.button {
  display: block;
  padding: 14px 26px;
  background:#EDF4F4;
  border-radius: 30px;
}

.button:hover {
  background: #4EABA8;
  color: #fff !important;
  box-shadow: 0px 10px 30px rgba(78, 171, 168, 0.5);
}

</style>
