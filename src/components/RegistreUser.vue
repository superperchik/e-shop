<template>
  <div class="container">
    <div
      class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
    >
      <div class="col">
        <div class="row">
          <form @submit.prevent="register">
            <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
            <div class="form-floating mb-3">
              <input
                required
                v-model="post.name"
                type="text"
                class="form-control"
                id="floatingFio"
                placeholder="ФИО"
              />
              <label for="floatingFio">ФИО</label>
            </div>
            <div class="form-floating mb-3">
              <input
                required
                v-model="post.email"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                required
                v-model="post.password"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Зарегистрироваться
            </button>
            <button class="w-100 btn btn-lg btn-outline-info" type="submit">
              Назад
            </button>
          </form>
        </div>
        <div class="text-danger" v-if="errors.length > 0">
          {{ invalidForm() }}
          Пользователь с такой эл.почтой уже существует
        </div>
        <div v-if="message">
          {{ this.$router.push("/") }}
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
      errors: [],
      message: "",
      post: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    register: function () {
      // let email = this.email
      // let password = this.password
      axios
        .post("http://service-standart/api/signup", this.post)
        .then((response) => (this.message = response.data.message))
        .catch((e) => {
          this.errors.push(e);
        });
      //this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/')).catch(err => console.log(err))
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
