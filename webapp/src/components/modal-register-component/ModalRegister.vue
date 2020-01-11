<template>
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Nome">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Cargo">
            </div>
        </div>
        </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Salvar</button>
      <button class="button">Cancelar</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
    name:"ModalRegister"
}
</script>

<style>

</style>