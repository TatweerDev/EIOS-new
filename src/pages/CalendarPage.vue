<template>
  <section class="page-indent">
    <div class="page-title">
      <h2 class="page-header">Расписание занятий</h2>
    </div>
    <div v-if="isDenied">
      <span style="line-height: 30px"><strong>401 — доступ запрещен.</strong><br>Предоставленные учетные данные не дают права на просмотр этой страницы.</span>
    </div>
    <div v-else class="calendar">
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
      B:['1','2','3','4','5','6','7','8','9','10','11'],
      isDenied: true
    }
  }
}
</script>

<style scoped>
.calendar h3 {
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
}

.calendar span {
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
  margin-bottom: 15px;
}
.classes-item:hover {
  color: #fff;
}
</style>