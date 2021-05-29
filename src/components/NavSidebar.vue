<template>
  <aside class="aside">
    <div class="header">
      <router-link to="/">
        <h1 class="header__text">ЭИОС</h1>
      </router-link>
    </div>
    <sidebar-top />
    <sidebar-bottom />
  </aside>
</template>

<script>
import SidebarTop from './SidebarTop.vue'
import SidebarBottom from './SidebarBottom.vue'

export default {
  components: { SidebarTop, SidebarBottom },

}
</script>

<style scoped>

.aside {
  width: 350px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #274348;
}

.header {
  text-align: center;
  margin-top: 40px;
}

.header__text {
  position: relative;
  margin: 0;
  color: #fff;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  width: 122px;
  margin: 0 auto;
  }

.header__text::after {
  position: absolute;
  content: '';
  right: -5px;
  bottom: 8px;
  width: 8px;
  height: 8px;
  background-color: #4EABA8;
  border-radius: 50%;
}

</style>