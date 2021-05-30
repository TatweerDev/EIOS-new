<template>
  <table>
    <tr class="title">
      <td class="table-header type">Тип</td>
      <td class="table-header link">Cсылка</td>
      <td class="table-header status">Статус</td>
    </tr>
    <tr class="table-row">
      <td class="table-item type item-folder">Учебные материалы дисциплины</td>
      <td class="table-item link item-link active">https://drive.google.com/drive/shared-with-me</td>
      <td class="table-item status active">Активен</td>
    </tr>
    <tr class="table-row">
      <td class="table-item type item-time">Практическая работа №17 «Работа с электронной почтой»</td>
      <td class="table-item link item-link active">https://drive.google.com/drive/shared-with-me</td>
      <td class="table-item status active">Активен</td>
    </tr>
    <tr class="table-row">
      <td class="table-item type item-time">Электронная почта. Сетевое коллективное взаимодействие. Сетевой этикет</td>
      <td class="table-item link item-link active">https://arzamas.academy/courses/13</td>
      <td class="table-item status active">Активен</td>
    </tr>
    <tr class="table-row-disabled">
      <td class="table-item type item-time-disabled disabled">Практическая работа №16 «Поиск информации в сети Интернет»</td>
      <td class="table-item link item-link disabled">https://abiturient.spbu.ru/2204-tri-veka-russk...</td>
      <td class="table-item status disabled">Завершён</td>
    </tr>
    <tr class="table-row-disabled">
      <td class="table-item type item-time-disabled disabled">Всемирная паутина. Файловые архивы</td>
      <td class="table-item link item-link disabled">https://abiturient.spbu.ru/2204-tri-veka-russk...</td>
      <td class="table-item status disabled">Завершён</td>
    </tr>
    <tr class="table-row-disabled">
      <td class="table-item type item-time-disabled disabled">Как устроен Интернет. IP-адрес компьютера Доменная система имен. Протоколы передачи данных.</td>
      <td class="table-item link item-link disabled">https://abiturient.spbu.ru/2204-tri-veka-russk...</td>
      <td class="table-item status disabled">Завершён</td>
    </tr>
    <tr class="table-row-disabled">
      <td class="table-item type item-time-disabled disabled">Локальные и глобальные компьютерные сети</td>
      <td class="table-item link item-link disabled">https://abiturient.spbu.ru/2204-tri-veka-russk...</td>
      <td class="table-item status disabled">Завершён</td>
    </tr>
  </table>
</template>

<style scoped>
.table-row,
.table-row-disabled,
.title {
  font-size: 11px;
  font-weight: 600;
  display: flex;
  vertical-align: middle;
  height: 47px;
  border-bottom: 1px solid #E5E5E5;
}

.table-row:hover {
  cursor: pointer;
  border-bottom: 1px solid #4EABA8;
}

.table-header {
  color: #ABABAB;
  padding: 21px 0 20px 15px;
}

.type {
  width: 710px;
}

.link {
  width: 285px;
}

.status {
  width: 96px;
}

.table-item {
  padding: 19px 0 22px 15px;
  color: #274348;
  overflow: hidden;
}

.item-folder,
.item-time-disabled,
.item-time {
  position: relative;
  padding-left: 42px;
}

.item-folder::before,
.item-time-disabled::before,
.item-time::before {
  position: absolute;
  content: '';
  left: 15px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.2 7.05a.17.17 0 00-.16.12L.6 15.75v.3c0 .22-.01.3.17.3H14.2c.34 0 .65-.23.73-.54L18 7.35v-.3H4.2z' fill='%234EABA8'/%3E%3Cpath d='M3.82 6.45H16.2V4.57a.82.82 0 00-.82-.82H7.95l-1.5-2.1H.82a.82.82 0 00-.82.82V15l3.08-8.02a.76.76 0 01.74-.54z' fill='%234EABA8'/%3E%3C/svg%3E");  background-repeat: no-repeat;
  transform: scale(0.75);
}

.item-time::before {
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3.62V2.04c.45-.26.75-.74.75-1.29V.38c0-.21-.17-.38-.38-.38H2.63c-.21 0-.38.17-.38.38v.37c0 .55.3 1.03.75 1.3v1.57c0 1.49.63 2.9 1.74 3.9L6.38 9l-1.64 1.48A5.26 5.26 0 003 14.38v1.58a1.5 1.5 0 00-.75 1.29v.38c0 .2.17.37.38.37h12.75c.2 0 .37-.17.37-.38v-.37c0-.55-.3-1.03-.75-1.3v-1.57c0-1.49-.63-2.9-1.74-3.9L11.62 9l1.64-1.48c1.1-1 1.74-2.41 1.74-3.9zm-2.74 2.79L10 8.44a.75.75 0 000 1.12l2.26 2.03a3.76 3.76 0 011.24 2.79v1.37h-.94L9.3 11.4a.39.39 0 00-.6 0l-3.26 4.35H4.5v-1.37c0-1.06.45-2.08 1.24-2.79L8 9.56a.75.75 0 000-1.12L5.74 6.41A3.76 3.76 0 014.5 3.62V2.25h9v1.37c0 1.06-.45 2.08-1.24 2.79z' fill='%234EABA8'/%3E%3Cpath d='M11.58 5.25H6.41a.38.38 0 00-.27.63l2.6 2.4a.37.37 0 00.51 0l2.61-2.4a.37.37 0 00-.28-.63z' fill='%234EABA8'/%3E%3C/svg%3E");
}

.item-time-disabled::before {
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3.62V2.04c.45-.26.75-.74.75-1.29V.38c0-.21-.17-.38-.38-.38H2.63c-.21 0-.38.17-.38.38v.37c0 .55.3 1.03.75 1.3v1.57c0 1.49.63 2.9 1.74 3.9L6.38 9l-1.64 1.48A5.26 5.26 0 003 14.38v1.58a1.5 1.5 0 00-.75 1.29v.38c0 .2.17.37.38.37h12.75c.2 0 .37-.17.37-.38v-.37c0-.55-.3-1.03-.75-1.3v-1.57c0-1.49-.63-2.9-1.74-3.9L11.62 9l1.64-1.48c1.1-1 1.74-2.41 1.74-3.9zm-2.74 2.79L10 8.44a.75.75 0 000 1.12l2.26 2.03a3.76 3.76 0 011.24 2.79v1.37h-.94L9.3 11.4a.39.39 0 00-.6 0l-3.26 4.35H4.5v-1.37c0-1.06.45-2.08 1.24-2.79L8 9.56a.75.75 0 000-1.12L5.74 6.41A3.76 3.76 0 014.5 3.62V2.25h9v1.37c0 1.06-.45 2.08-1.24 2.79z' fill='%23CACACA'/%3E%3C/svg%3E");
}

.item-link {
  text-decoration: underline;
}

.active {
  color: #4EABA8;
}

.disabled {
  color: #ABABAB;
}

</style>