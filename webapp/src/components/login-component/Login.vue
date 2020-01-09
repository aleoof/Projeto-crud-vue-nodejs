<template>
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-6">
        <div class="box">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Email"/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="password" placeholder="Senha"/>
            </div>
          </div>
          <div class="level">
            <div class="level-left"></div>
            <p class="level-item">
              <button class="button is-success">Login</button>
            </p>
            <div class="level-rigth"></div>
          </div>
          <div class="buttons"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
.container{
    padding-top: 5em;
}
</style>