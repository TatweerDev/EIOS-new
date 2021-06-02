<template>
  <section class="title" >
    <div class="main-wrapper">
      <div class="content">
        <h1>Электронная <br> информационно-образовательная среда</h1>
        <span class="descr">Электронная информационно-образовательная среда для обучающихся, их родителей и сотрудников образовательной организации</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content {
  padding: 150px;
}

.content h1 {
  display: block;
  margin: 0 0 90px 0;
  font-size: 48px;
  font-weight: 500;
  color: #fff;
}

.title {
  width: 100vw;
  height: 810px;
  background: url("../img/title.jpg")center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-wrapper {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(39, 67, 72, 0.63), rgba(39, 67, 72, 0.63));
}

.descr {
  display: block;
  width: 600px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
}
</style>