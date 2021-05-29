<template>
  <section class="user">
    <div class="user__header">
      <h2>Личный кабинет</h2>
    </div>
    <ul class="links-list">
      <li class="links-item portfolo">Портфолио</li>
      <li class="links-item calendar">Расписание занятий</li>
      <li class="links-item journal">Электронные журналы</li>
    </ul>
    <div>
      <span class="logout">Выйти</span>
    </div>
  </section>
</template>

<style scoped>
.user {
  width: 350px;
  padding-left: 45px;
  display: block;
  margin: auto auto 50px auto;
}

.user__header {
  margin-bottom: 40px;
}

.user__header h2 {
  font-size: 20px;
  line-height: 24px;
  color: #4EABA8;
  font-weight: normal;
}

.links-list {
  list-style: none;
  margin-bottom: 50px;
}

.links-item {
  cursor: pointer;
  color: #fff;
  margin-bottom: 29px;
}

.links-item:hover {
  color: #4EABA8 ;
}

.portfolo,
.journal,
.calendar {
  position: relative;
}

.portfolo::before,
.journal::before,
.logout::before,
.calendar::before {
  position: absolute;
  content: '';
  left: -38px;
  bottom: 4px;
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%234EABA8'%3E%3Cpath d='M11.25 4.88a.75.75 0 01-.75-.75V3h-3v1.13a.75.75 0 01-1.5 0V3c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v1.13c0 .4-.34.75-.75.75zM9.53 11.54a1.64 1.64 0 01-1.11-.02L0 8.72v5.72c0 1.14.92 2.06 2.06 2.06h13.88c1.14 0 2.06-.92 2.06-2.06V8.72l-8.47 2.82z'/%3E%3Cpath d='M18 5.81v1.72l-8.82 2.94a.5.5 0 01-.18.03.5.5 0 01-.18-.03L0 7.53V5.81c0-1.14.92-2.06 2.06-2.06h13.88c1.14 0 2.06.92 2.06 2.06z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h18v18H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");  
  background-repeat: no-repeat;
}

.calendar::before {
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%234EABA8'%3E%3Cpath d='M.53 13.75H14.3c.12 0 .24-.05.34-.13.13-.1 3.15-2.7 3.33-8.31H3.18C3 10.4.22 12.79.18 12.8a.53.53 0 00.35.94zM17.47 2.14h-2.63v-.52c0-.3-.24-.53-.53-.53-.3 0-.53.23-.53.53v.52h-2.67v-.52c0-.3-.23-.53-.53-.53-.3 0-.53.23-.53.53v.52H7.42v-.52c0-.3-.23-.53-.53-.53-.3 0-.53.23-.53.53v.52H3.73c-.3 0-.53.24-.53.53v1.58H18V2.67c0-.3-.23-.53-.53-.53z'/%3E%3Cpath d='M15.32 14.43c-.28.24-.64.37-1.01.37H3.2v1.58c0 .3.23.53.53.53h13.74c.3 0 .53-.24.53-.53v-5.9a10.45 10.45 0 01-2.68 3.95z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h18v18H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.journal::before {
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.28 4.64A.53.53 0 000 5.1V16a.53.53 0 00.78.47c.01-.01 1.81-.96 3.98-.96a9.5 9.5 0 013.71.82V4.3c-.8-.32-2.16-.73-3.7-.73a10.4 10.4 0 00-4.5 1.08zm6.6 8.44a.53.53 0 01-.64.4 8.63 8.63 0 00-4 0 .53.53 0 11-.25-1.03 9.69 9.69 0 014.5 0c.28.06.45.35.39.63zm0-2.1a.53.53 0 01-.64.38 8.63 8.63 0 00-4 0 .53.53 0 11-.25-1.02 9.69 9.69 0 014.5 0c.28.06.45.35.39.63zm0-2.12a.53.53 0 01-.64.4 8.63 8.63 0 00-4 0 .53.53 0 11-.25-1.03 9.69 9.69 0 014.5 0c.28.07.45.35.39.63zm0-2.1a.53.53 0 01-.64.38 8.63 8.63 0 00-4 0 .53.53 0 01-.25-1.02 9.69 9.69 0 014.5 0c.28.07.45.35.39.63zM17.72 4.64a10.4 10.4 0 00-4.48-1.08c-1.55 0-2.9.41-3.71.73v12.04a9.5 9.5 0 013.7-.82c2.17 0 3.96.94 4 .96A.53.53 0 0018 16V5.1c0-.2-.1-.37-.28-.46zm-1.32 8.44a.53.53 0 01-.63.4 8.64 8.64 0 00-4.01 0 .53.53 0 01-.25-1.03 9.69 9.69 0 014.5 0c.29.06.46.35.4.63zm0-2.1a.53.53 0 01-.63.38 8.64 8.64 0 00-4.01 0 .53.53 0 11-.25-1.02 9.69 9.69 0 014.5 0c.29.06.46.35.4.63zm0-2.12a.53.53 0 01-.63.4 8.63 8.63 0 00-4.01 0 .53.53 0 11-.25-1.03 9.69 9.69 0 014.5 0c.29.07.46.35.4.63zm0-2.1a.53.53 0 01-.63.38 8.63 8.63 0 00-4.01 0 .53.53 0 01-.25-1.02 9.69 9.69 0 014.5 0c.29.07.46.35.4.63zM4.76 1.47c-2.13 0-3.34.51-3.39.54a.53.53 0 00-.32.48v.67c.91-.32 2.22-.66 3.71-.66 1.49 0 2.8.35 3.71.67 0 0-1.15-1.7-3.7-1.7zM16.95 3.16V2.5c0-.21-.13-.4-.32-.48a9.15 9.15 0 00-3.4-.54c-2.53 0-3.7 1.7-3.7 1.7.9-.32 2.22-.67 3.7-.67 1.5 0 2.8.34 3.72.66z' fill='%234EABA8'/%3E%3C/svg%3E");
}

.logout {
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: 40px;
  color: #4EABA8 ;;
}

.logout:hover {
  opacity: 0.7;
}

.logout::before {
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.9 0v.8H0v15.83h1.07V1.94H2.9V18l7.1-1.37V1.37L2.9 0zm1.3 9.62c-.23 0-.43-.27-.43-.6 0-.34.2-.6.43-.6.24 0 .44.26.44.6 0 .33-.2.6-.44.6z' fill='%234EABA8'/%3E%3C/svg%3E");
}

</style>