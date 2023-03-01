<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col" v-for="(data, index) in productsData.items" :key="index">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{ data.title }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ data.price }} руб.</h1>
            <p></p>
            <button
              v-if="$store.state.apiToken !== 0"
              @click="addToCart(data.id)"
              type="button"
              class="w-100 btn btn-lg btn-outline-primary"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "ShopCatalog",
  data() {
    return {
      productsData: [],
    };
  },
  created() {
    axios
      .get("https://vue-study.skillbox.cc/api/products")
      .then((response) => (this.productsData = response.data));
    this.checkApi();
  },
  methods: {
    addToCart: function (item) {
      axios.defaults.headers.common['Authorization'] = `Bearer `+this.$store.state.apiToken;
      axios.post("http://service-standart/api/cart/" + item);
      alert("Товар успешно добавлен в корзину");
    },
    checkApi: function () {
      return localStorage.getItem("api-token");
    },
  },
};
</script>
