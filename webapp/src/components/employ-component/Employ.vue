<template>
<div class="column is-12">
  <div class="box">
      <div class="level">
          <div class="level-left">
              <p class="level-item">Nome: {{name}}</p>
          </div>
              <p class="level-item">Cargo: {{cargo}}</p>
          <div class="level-right">
              <p class="level-item">
                <button class="button" v-on:click="editEmploy">Editar</button>
              </p>
              <p class="level-item">
                <button class="button" v-on:click="removeEmploy">Remover</button>
              </p>
          </div>
      </div>
  </div>
     <!-- <ModalRegister v-on:close="toggleModal"  v-if="openModal"></ModalRegister> -->
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Empoy',
    // data(){
    //   return{
    //     openModal : false,
    //   }
    // },
    props: ['id','name','cargo'],
    methods: {
      removeEmploy(){
        axios.delete(`http://localhost:3333/user/${this.$props.id}`).then(()=>{
          this.updateList()
        })
      },
      editEmploy(){
        let employ = {
          id:this.$props.id,
          name:this.$props.name,
          cargo:this.$props.cargo,
        }
        this.$emit('openEditEmploy',employ)
      },
      updateList(){
        this.$emit('updateList')
      }
    }
}
</script>

<style>

</style>