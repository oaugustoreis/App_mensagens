<template>
  <div class="empty">
    <div
      class="container full-width full-height column items-center justify-center"
    >
      <q-img
      src="../../../public/whatsapp-logo.png"
        height="100px"
        width="100px"
      ></q-img>
      <h4>WhatsApp para Windows</h4>
      <span
        >Envie e receba mensagens sem precisar manter seu celular conectado a
        internet.
      </span>
      <span
        >Use WhatsApp em ate quatro aparelhos conectados e um celular ao mesmo
        tempo</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyChat",
};
</script>
<style lang="scss" scoped>
.empty {
  margin-right: calc(100vw / 6);
  height: calc(80vh);
  min-width: 800px;
  width: calc(100vw);
  background-color: $tres;
}
.container {
  h4 {
    width: auto;
    font-size: 25px;
    text-align: center;
    margin: 12px 0px;
    color: $cinco;
  }
  span {
    width: auto;
    text-align: center;
    color: $cinco;
  }
}
</style>
