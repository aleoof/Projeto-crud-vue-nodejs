<template>
  <router-view class="container"></router-view>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {

        if (localStorage.getItem("userId") ) {
          this.$router.push({ name: "home" });
        } else {
          this.$router.push({ name: "login" });
        }
  }
};
</script>

<style>
/* #app {
  box-sizing: border-box;
  height: 100vh;
  width: auto;
} */
</style>
