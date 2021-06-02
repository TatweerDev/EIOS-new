<template>
  <div class="not-found page-indent">
    <h2>Страница не найдена, но вы можете вернуться <router-link to="/"> на главную</router-link></h2>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
}

.not-found a {
  text-decoration: underline;
  color: #4EABA8;
}
</style>