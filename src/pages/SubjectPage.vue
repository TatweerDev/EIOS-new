<template>
  <section class="page-indent">
    <div class="classes">
      <div class="page-title">
        <h2 class="page-header">Информатика</h2>
      </div>
      <ul class="classes-list">
        <li
          v-for="el in classes"
          :key="el"
        >
         <router-link
            class="classes-item button"
            to="/denied"
            :class="{ disabled: el.isDisabled, active: el.isActive }"
            @click="toggleActive(el)"
          >{{ el.number }} класс
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="materials-title">
        <h2 class="page-header">Материалы</h2>
      </div>
      <subjects-table />
    </div>
  </section>
</template>

<script>
import SubjectsTable from '../components/SubjectsTable.vue'

export default { 
  components: { SubjectsTable },
  data() {
    return {
      classes: [
        {
          number: '6',
          isDisabled: false,
          isActive: false
        },
        {
          number: '7',
          isDisabled: false,
          isActive: false
        },
        {
          number: '8',
          isDisabled: false,
          isActive: false
        },
        {
          number: '9',
          isDisabled: false,
          isActive: false
        },
        {
          number: '10',
          isDisabled: true,
          isActive: false
        },
        {
          number: '11',
          isDisabled: true,
          isActive: false
        },
      ]
    }
  },
  methods: {
    toggleActive(el) {
      el.isActive = !el.isActive
    }
  }
}
</script>

<style scoped>
.classes {
  margin-bottom: 52px;
}
.classes-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
}

.classes-item {
  text-align: center;
  display: block;
  font-size: 12px;
  color: #4EABA8;
  width: 166px;
  margin: 0 15px 15px 0;
}

.classes-item:hover {
  cursor: pointer;
  color: #fff;
  opacity: 0.7;
}

.classes-item:active {
  opacity: 0.3;
}

.disabled {
  background: #fff !important;
  color: #CACACA !important;
  border: 1px solid #CACACA !important;
}

.active {
  background: #4EABA8;
  color: #fff;
}

.disabled:hover {
  cursor: initial;
  color: #CACACA;
  border: 1px solid #CACACA;
  box-shadow: none;
  opacity: 1;
}

</style>