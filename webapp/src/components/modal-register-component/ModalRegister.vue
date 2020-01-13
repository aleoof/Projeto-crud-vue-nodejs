<template>
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
    </header>
    <section class="modal-card-body">
        <div class="field">
            <div class="control">
                <input class="input" v-model="name" type="text" placeholder="Nome">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" v-model="cargo" type="text" placeholder="Cargo">
            </div>
        </div>
        </section>
    <footer class="modal-card-foot">
      <button class="button is-success" v-on:click="saveRegister" >Salvar</button>
      <button class="button" v-on:click="closeModal">Cancelar</button>
    </footer>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:"ModalRegister",
    data(){
      return{
      name:this.$props.id? this.$props.employName: '',
      cargo:''
      }
    },
    mounted(){
/* eslint-disable no-console */
      console.log(this.$props.employName, this.$props.employCargo)
      // this.name = this.$props.employName
      this.cargo = this.$props.employCargo
    },
    props:['id', 'employName', 'employCargo'],
    methods:{
      saveRegister(){
        if(!this.$props.id){
          axios.post('http://localhost:3333/user',{name:this.name, cargo:this.cargo}).then(() => {
            this.closeModal()
          })
        }else{
          axios.put(`http://localhost:3333/user/${this.$props.id}`,{name:this.name, cargo:this.cargo}).then(() => {
            this.closeModal()
          })
        }
      },
      closeModal(){
        this.$emit('close')
      }
    }
}
</script>

<style>

</style>