<template>
  <div class="container">
    <div
      class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
    >
      <div class="col">
        <div class="row">
          <form @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control "
                required
                v-model="post.email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                required
                v-model="post.password"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Войти
            </button>
            <router-link to="/" class="w-100 btn btn-lg btn-outline-info"
              >Назад</router-link
            >
          </form>
          <div class="text-danger" v-if="errors.length > 0">
            {{ invalidForm() }}
            Проверьте корректность логина и пароля
          </div>
          <div v-if="message">
            {{ this.$router.push("/") }}
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginUser",
  data() {
    return {
      apiToken: null,
      errors: [],
      message: 0,
      post: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login: function () {
      axios
        .post("http://service-standart/api/login", this.post)
        .then((response) => (this.$store.state.apiToken = response.data.data) )
        .catch((e) => {
          this.errors.push(e);
        });
        this.$router.push("/token")
    },
    invalidForm: function () {
      let elements = document.getElementsByClassName("form-control");
      for (let i = 0; i < elements.length; i += 1) {
        //elements[i].classList.remove("is-valid");
        elements[i].classList.add("is-invalid");
      }
    },
  },
};
</script>
