<template>
  <div>
    <h2 class="title is-2">
      Adicionar Funcioário
    </h2>
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="level">
          <div class="level-left">
            <button class="level-item button is-primary" v-on:click="toggleModal()" >Adicionar</button>
          </div>
          <div class="level-right"></div>
        </div>
      </div>
      <Employ></Employ>
    </div>
    <ModalRegister v-if="openModal"></ModalRegister>
  </div>
</template>

<script>
import Employ from '../employ-component/Employ';
import ModalRegister from '../modal-register-component/ModalRegister'

export default {
    name:'EmployList',
    data(){
      return{
        openModal: false
      }
    },
    components:{
      Employ,
      ModalRegister
    },
    methods:{
      toggleModal(){
        this.openModal = !this.openModal
      }
    }
}
</script>

<style>

</style>