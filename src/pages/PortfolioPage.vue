<template>
  <section>
    <div class="page-title">
      <h2 class="page-header">Портофолио</h2>
    </div>
    <div class="portfolio-subject">
      <h3>Литература</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in literature"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
      <h3>География</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in geografy"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
      <h3>Русский язык</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in russian"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
      <h3>Информатика</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in informatic"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
      <h3>Математика</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in math"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
      <h3>Биология</h3>
      <ul class="subject-list">
        <li
          v-for="(card,index) in biology"
          :key="index"
          class="list-item"
        >
          <portfolio-card :descr=card.descr :date=card.date>
          </portfolio-card>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard.vue'
export default {
  components: { PortfolioCard },
  data() {
    return {
      literature: [
        {
          descr: 'Исследование "Как часто поэты употребляют причастия в своих произведений"',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Исследование "Как часто поэты употребляют причастия в своих произведений"',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Фестиваль презентаций для шестиклассников и семиклассников',
          date: '19 августа, 2020 год'
        },
        {
          descr: 'Фестиваль презентаций для шестиклассников и семиклассников',
          date: '19 августа, 2020 год'
        }
      ],
      geografy: [
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Составление «закрепляющих» кластеров',
          date: '29 августа, 2019 год'
        },
      ],
      russian: [
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Составление «закрепляющих» кластеров',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Составление «закрепляющих» кластеров',
          date: '29 августа, 2019 год'
        },
      ],
      informatic: [
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
      ],
      math: [
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        }
      ],
      biology: [
        {
          descr: 'Исследование "Как часто поэты употребляют причастия в своих произведений"',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Исследование "Как часто поэты употребляют причастия в своих произведений"',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Фестиваль презентаций для шестиклассников и семиклассников',
          date: '19 августа, 2020 год'
        },
        {
          descr: 'Фестиваль презентаций для шестиклассников и семиклассников',
          date: '19 августа, 2020 год'
        },
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Мини-проект «Капитан и его каманда»',
          date: '29 августа, 2019 год'
        },
        {
          descr: 'Исследование "Как часто поэты употребляют причастия в своих произведений"',
          date: '29 августа, 2019 год'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-subject {
  margin-top: 30px;
  max-height: 610px;
  overflow-y: auto;
}
.portfolio-subject h3 {
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
  
}

.subject-list {
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.list-item {
  margin: 0 15px 15px 0;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4EABA8;
}
</style>