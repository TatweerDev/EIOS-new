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
  margin: 70px;
}

.page-title {
  margin-bottom: 52px;
}

.page-header {
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}

.button {
  display: block;
  padding: 19px 35px;
  background:#EDF4F4;
  border-radius: 30px;
}

.button:hover {
  background: #4EABA8;
  color: #fff !important;
}

</style>
