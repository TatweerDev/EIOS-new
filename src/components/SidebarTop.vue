<template>
  <section class="data">
      <div class="data_header">
        <h2>Банк знаний</h2>
      </div>
      <div class="accordion">
        <button class="subjects__button" @click="showSubjects">
          <div class="subjects__header">
            <h2>Предметы</h2>
            <span class="triangle" :class="{rotated: subjectsShown}"></span>
          </div>
        </button>
        <div class="list-wrapper" :class="{opened: subjectsShown}">
          <ul class="subjects__list">
            <li
              v-for="item in subjects"
              :key="item"
              class="list-item"
            >
            <router-link to="/subject">
              {{ item }}
            </router-link>
 
            </li>
          </ul>
        </div>
      </div>
      <div class="accordion">
        <button class="subjects__button" @click="showServices">
          <div class="services__header">
            <h2>Сервисы</h2>
            <span class="triangle" :class="{rotated: servicesShown}"></span>
          </div>
        </button>
        <div class="services-wrapper" :class="{servopen: servicesShown}">
          <ul class="services__list">
            <li
              v-for="item in services"
              :key="item"
              class="service-item"
            >
            <router-link class="service-item" to="/services">
              {{ item.name }}
            </router-link>
             
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        'Математика',
        'Геометрия',
        'Русский язык',
        'Русская литература',
        'Иностранный язык',
        'Информатика',
        'Физика',
        'Астрономия',
        'Химия',
        'Биология',
        'География'
      ],
      services: [
        {
          name: 'Подготовка к ГИА, ЕГЭ',
          slug: 'EG'
        }
      ],
      subjectsShown: false,
      servicesShown: false
    }
  },
  methods: {
    showSubjects() {
      this.servicesShown = false
      this.subjectsShown = !this.subjectsShown
    },
    showServices() {
      this.subjectsShown = false
      this.servicesShown = !this.servicesShown
    }
  }
}
</script>

<style scoped>

h2 {
  margin: 0;
  font-weight: normal;
}

.accordion {
  width: 100%;
  background-color: #27474E; 
  font-weight: normal;
  margin-bottom: 5.5px;
}

.accordion h2 {
   color: #fff;
   font-weight: normal;
   font-size: 12px;
}


.data_header {
  width: 195px;
  margin: 30px 34px;
}

.data_header h2{
  font-size: 15px;
  line-height: 18px;
  color: #4EABA8;
  font-weight: normal;
}

.list-item a{
  text-decoration: none;
  display: block;
  color: #fff;
  margin-bottom: 14px;
  font-size: 11px;
}

.list-item a:hover {
  color: #4EABA8;
  cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
}

.services-wrapper {
  overflow: hidden;
  max-height: 0;
  transition: 0.2s all;
 
}

.servopen {
  max-height: 200px;
  padding-bottom: 15px;
}

.service-item {
  color: #fff;
  font-size: 10.5px;
  margin-bottom: 15px;

}

.service-item:hover {
  color: #4EABA8;
  cursor: pointer;
}

.subjects__header,
.services__header {
  display: flex;
  position: relative;
  width: 166.5px;
  height: 16.5px;
  text-align: left;
}

.services__header::before {
  position: absolute;
  content: '';
  left: -28.5px;
  bottom: 2px;
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0a9 9 0 100 18A9 9 0 009 0zm1.87 13.95l-1.1.42c-.28.1-.6.14-.97.14-.56 0-1-.14-1.3-.41a1.33 1.33 0 01-.47-1.04 3.78 3.78 0 01.15-1.08l.58-2.05c.05-.2.1-.38.13-.56.03-.17.05-.33.05-.48 0-.26-.06-.44-.16-.55-.11-.1-.32-.15-.62-.15-.15 0-.3.02-.46.07l-.4.13.15-.63 1.09-.4c.34-.1.67-.16.98-.16.56 0 .98.13 1.29.4.3.27.45.62.45 1.05a6.12 6.12 0 01-.15 1.09l-.57 2.04a5.78 5.78 0 00-.19 1.04c0 .27.06.46.19.55.12.1.33.15.63.15a2.71 2.71 0 00.86-.2l-.16.63zm-.1-8.29c-.27.25-.6.38-.97.38-.38 0-.7-.13-.98-.38a1.2 1.2 0 01-.4-.9c0-.36.14-.67.4-.92.28-.25.6-.38.98-.38s.7.13.97.38.4.56.4.91c0 .36-.13.66-.4.91z' fill='%234EABA8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  transform: scale(0.75);
}
.subjects__header::before {
  position: absolute;
  content: '';
  left: -26.5px;
  bottom: 1px;
  width: 14px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.67 0h-1.55v5.24c0 .37-.37.56-.66.1L9.44 3.68 8.4 5.33c-.29.46-.66.28-.66-.09V0h-5.2A2.28 2.28 0 00.29 2.28v13.45A2.28 2.28 0 002.56 18h10.11a1.04 1.04 0 001.05-1.04V1.05c0-.58-.47-1.05-1.05-1.05zm.2 15.3l-9.88.01a.43.43 0 000 .86h9.88v.8c0 .04-.03.09-.06.12a.18.18 0 01-.13.05H2.56a1.4 1.4 0 010-2.81h10.12c.1 0 .18.08.19.18v.79z' fill='%234EABA8'/%3E%3C/svg%3E");
  transform: scale(0.75);
}

.subjects__button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 16.5px 33.75px 16.5px 62px;
}

.subjects__list {
  max-height: 293px;
  padding-bottom: 11.5px;
  margin-right: 37.5px;
  margin-bottom: 0;
  overflow-y: auto;
  transition: 0.2s all;
}

.services__list {
  overflow-y: auto;
  margin-bottom: 0;
}

.list-wrapper {
  height: 0;
  overflow: hidden;
  transition: 0.2s all;
  position: relative;
}

.opened {
  height: 293px;
}

.list-wrapper::after {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  width: 100%;
  height: 27px;
  background: linear-gradient(0deg, rgba(39,71,78,1) 0%, rgba(39,71,78,0.7) 50%, rgba(39,71,78,0) 100%);
}

.triangle {
  display: block;
  width: 13px;
  height: 6px;
  margin: 8px 0 auto auto;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 4.5L12.99 0H0l6.5 4.5z' fill='%234EABA8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  transform: scale(0.75);
}

.rotated {
  transform: scale(0.75) rotate(180deg);
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background-color: #27474E;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4EABA8;
}
</style>