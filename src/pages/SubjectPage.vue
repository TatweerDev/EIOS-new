<template>
  <section>
    <div class="classes">
      <div class="page-title">
      <h2 class="page-header">Информатика</h2>
    </div>
    <ul class="classes-list">
      <li
        v-for="el in classes"
        :key="el"
        :disabled="el.isDisabled"
        class="classes-item button"
        :class="{ disabled: el.isDisabled, active: el.isActive }"
      >{{ el.number }} класс</li>
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
          number: '1',
          isDisabled: false,
          isActive: true
        },
        {
          number: '2',
          isDisabled: false,
          isActive: false
        },
        {
          number: '3',
          isDisabled: false,
          isActive: false
        },
        {
          number: '4',
          isDisabled: false,
          isActive: false
        },
        {
          number: '5',
          isDisabled: false,
          isActive: false
        },
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

.disabled {
  background: #fff;
  color: #CACACA;
  border: 1px solid #CACACA;
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