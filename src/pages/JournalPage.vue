<template>
  <section>
    <div class="page-title">
      <h2 class="page-header">Электронные журналы</h2>
    </div>
    <div class="journal">
      <h3>«<span>А</span>» классы</h3>
      <ul class="classes-list">
        <li
          v-for="el in A"
          :key="el"
          class="button classes-item"
        >
          {{ el }} «А»
        </li>
      </ul>
      <h3>«<span>Б</span>» классы</h3>
      <ul class="classes-list">
        <li
          v-for="el in B"
          :key="el"
          class="button classes-item"
        >
          {{ el }} «Б»
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      A:['1','2','3','4','5','6','7','8','9','10','11'],
      B:['1','2','3','4','5','6','7','8','9','10','11']
    }
  }
}
</script>

<style scoped>
.journal h3 {
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
}

.journal span {
  color: #4EABA8;
  font-weight: 600;
}

.classes-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  font-size: 12px;
  margin-bottom: 40px;
}

.classes-item {
  cursor: pointer;
  color: #4EABA8;
  font-weight: 600;
  margin-right: 15px;
}
.classes-item:hover {
  color: #fff;
}
</style>