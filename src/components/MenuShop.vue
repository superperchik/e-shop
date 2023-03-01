<template>
    <header>
      <div
        class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
      >
        <router-link
          to="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <span class="fs-4">«Просто купить»</span>
         
        </router-link>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          
          <router-link  v-if="$store.state.apiToken === 0"
            class="me-3 py-2 text-dark text-decoration-none"
            to="/register"
          >
            Регистрация</router-link
          >
          <router-link   v-if="$store.state.apiToken === 0"
            class="me-3 py-2 text-dark text-decoration-none"
            to="/login"
            >Авторизация</router-link
          >
          <router-link  
            class="me-3 py-2 text-dark text-decoration-none"
            to="/orders"
            >Мои заказы</router-link
          >
          <router-link
            class="me-3 py-2 text-dark text-decoration-none"
            to="/cart"
            >Корзина</router-link
          >
          <router-link v-if="$store.state.apiToken !== 0"
            class="me-3 py-2 text-dark text-decoration-none"
            to="/exit"
            >Выход</router-link
          >
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: "MenuShop",
  data() {
    return{
    x: localStorage.getItem('api-token'),
  }},
  computed:
  { apitokenMenu:{
    get: function () {
      // `this` указывает на экземпляр vm
      return this.x
    }}
  }
};
</script>