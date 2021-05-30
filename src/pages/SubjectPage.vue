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
          isDisabled: false
        },
        {
          number: '2',
          isDisabled: false
        },
        {
          number: '3',
          isDisabled: false
        },
        {
          number: '4',
          isDisabled: false
        },
        {
          number: '5',
          isDisabled: false
        },
        {
          number: '6',
          isDisabled: false
        },
        {
          number: '7',
          isDisabled: false
        },
        {
          number: '8',
          isDisabled: false
        },
        {
          number: '9',
          isDisabled: false
        },
        {
          number: '10',
          isDisabled: true
        },
        {
          number: '11',
          isDisabled: true
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

</style>