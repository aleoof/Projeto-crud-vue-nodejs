<template>
  <div>
    <h2 class="title is-2">Adicionar Funcioário</h2>
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="level">
          <div class="level-left">
            <button class="level-item button is-primary" v-on:click="toggleModal()">Adicionar</button>
            <button class="level-item button is-danger" v-on:click="logout()">Logout</button>
          </div>
          <div class="level-right"></div>
        </div>
      </div>
      <div v-for="(item, index) in items" :key="index">
        <Employ v-if="item.user !== 'admin'" v-on:updateList="updateEmployList" v-on:openEditEmploy="toggleModal" v-bind:id="item.id" v-bind:name="item.name" v-bind:cargo="item.cargo"></Employ>
      </div>
    </div>

    <ModalRegister v-on:close="toggleModal" v-bind:id="this.employ.id? this.employ.id : ''" v-bind:employName="this.employ.name" v-bind:employCargo="this.employ.cargo" v-if="openModal"></ModalRegister>
  </div>
</template>

<script>
import Employ from "../employ-component/Employ";
import ModalRegister from "../modal-register-component/ModalRegister";
import axios from "axios";

export default {
  name: "EmployList",
  data() {
    return {
      openModal: false,
      items: [],
      employ:{}
    };
  },
  mounted() {
   this.updateEmployList()
  },
  components: {
    Employ,
    ModalRegister
  },
  methods: {
    toggleModal(value) {
      if(value){
        this.employ = value
      }
      /* eslint-disable no-console */
          console.log(this.employ);
      this.openModal = !this.openModal;
      if (!this.openModal) {
        this.updateEmployList()
      }
    },
    updateEmployList(){
      axios.get(`http://localhost:3333/users`).then(response => {
          this.items = response.data;
          /* eslint-disable no-console */
          console.log(this.items);
        });
    },
    logout(){
      localStorage.setItem('userId','')
      this.$router.push({name: 'login'})
    }
  }
};
</script>

<style>
</style>