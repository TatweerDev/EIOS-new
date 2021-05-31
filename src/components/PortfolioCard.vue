<template>
  <div class="card-body">
    <div class="card-left">
      <span class="descr">{{ descr }}</span>
      <span class="date">{{ date }}</span>
    </div>
    <div class="card-right">
      <span class="card-link">Смотреть</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['descr', 'date']
}
</script>

<style scoped>
.card-body {
  cursor: pointer;
  display: flex;
  width: 530px;
  background: #EDF4F4;
  border-radius: 40px;
  padding: 19px 30px;
}

.card-left {
  width: 346px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.date {
  font-weight: 400;
  font-size: 9px;
}

.descr {
  font-size: 12px;
  line-height: 19px;
  font-weight: 600;
  margin-bottom: 11px;
}

.card-right {
  display: flex;
  width: 69px;
}

.card-link {
  position: relative;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #4EABA8;
  font-weight: 600;
}

.card-link::after {
  position: absolute;
  content: '';
  right: -47px;
  top: 50%;
  margin-top: -7px;
  width: 40px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37.7 8.7a1 1 0 000-1.4L31.35.92a1 1 0 10-1.41 1.41L35.59 8l-5.66 5.66a1 1 0 001.41 1.41l6.37-6.36zM0 9h37V7H0v2z' fill='%234EABA8'/%3E%3C/svg%3E");    
  background-repeat: no-repeat;
  transform: scale(0.75);
}
</style>