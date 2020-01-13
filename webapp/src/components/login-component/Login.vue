<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-6">
        <div class="box">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Usuário" v-model="user" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="password" placeholder="Senha" v-model="password" />
            </div>
          </div>
          <div class="level">
            <div class="level-left"></div>
            <p class="level-item">
              <button class="button is-success" v-on:click="login">Login</button>
            </p>
            <div class="level-rigth"></div>
          </div>
          <!-- <div class="buttons"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3333/login", {
          user: this.user,
          password: this.password
        })
        .then(response => {
          if (response.data.map(res => res.id).join("")) {
            localStorage.setItem(
              "userId",
              response.data.map(res => res.id).join("")
            );
            this.$router.push({ name: "home" });
          }
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (localStorage.getItem("userId")) {
        vm.$router.push({ name: "home" });
      }
    });
  }
};
</script>

<style>
.container {
  padding-top: 5em;
}
</style>