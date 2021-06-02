<template>
  <section class="page-indent">
    <div class="page-title">
      <h2 class="page-header">Подготовка к ГИА, ЕГЭ</h2>
    </div>
    <ul class="sevices-list">
      <li
        v-for="el in services"
        :key="el"
        class="service-item button"
      ><div class="text-wrapper">
        <span class="descr">{{ el }}</span>
        <svg class="svg" width="38" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.7 8.7a1 1 0 000-1.4L31.35.92a1 1 0 10-1.41 1.41L35.59 8l-5.66 5.66a1 1 0 001.41 1.41l6.37-6.36zM0 9h37V7H0v2z" />
        </svg>
      </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        'ФИПИ',
        'Решу ЕГЭ',
        'Экзамер',
        'Foxford.ru',
        'Яндекс.ЕГЭ',
        'Maximum',
        'Skyeng.ru',
        'LinguaLeo',
      ]
    }
  }
}
</script>

<style scoped>

.sevices-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
}

.service-item {
  text-align: center;
  width: 260px;
  margin-right: 15px;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
}

.descr {
  display: block;
  position: relative;
}

.text-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
  width: fit-content;
}
.svg {
  margin-left: 10px;
  fill: #4EABA8;
}

.service-item:hover .svg {
  fill: #fff;
}

</style>