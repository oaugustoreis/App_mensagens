<template>
  <div class="message-bar row items-center">
    <div class="q-mx-md">
      <q-btn
        round
        dense
        unelevated
        icon="fa-regular fa-face-smile"
        text-color="white"
        size="12px"
        class="q-mr-sm"
      ></q-btn>
      <q-btn
        round
        dense
        unelevated
        icon="fa-solid fa-paperclip"
        text-color="white"
        size="12px"
        class="q-mr-sm"
      ></q-btn>
    </div>
    <q-input
      placeholder="Digite uma mensagem..."
      borderless
      dark
      rounded
      v-model="text"
      class="input-message shadow-8"
      @keyup.enter="sendMessage()"
    ></q-input>
    <q-btn
      round
      dense
      unelevated
      icon="fa-solid fa-angle-right"
      text-color="white"
      size="12px"
      @click="sendMessage()"
    ></q-btn>
    <q-btn
      round
      dense
      unelevated
      icon="fa-solid fa-microphone"
      text-color="white"
      size="12px"
      class="q-ma-sm"
    ></q-btn>
  </div>
</template>

<script>
import api from "src/services/api";
import { notify } from "src/utils";
export default {
  props: ["currentUser"],
  name: "MessageBar",
  data() {
    return {
      text: "",
      myId: localStorage.getItem("myId"),
    };
  },
  methods: {
    async sendMessage() {
      if (this.text !== "" && this.currentUser) {
        await api
          .post("message", {
            text: this.text,
            user_destination: this.currentUser,
            user_send: this.myId,
          })
          .then((response) => {
            this.$emit("reload", { messageId: response.data.id });
            this.text = "";
          })
          .catch((error) => {
            notify("negative", error.response.data.message);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.message-bar {
  padding-bottom: 20px;
  border-bottom-right-radius: 10px;
  margin-right: calc(100vw / 6);
  height: 62px;
  background-color: $tres;
  .input-message {
    width: 80%;
    border-radius: 20px;
    line-height: 1.5;
    background-color: $um;
    padding: 0 10px;
    transition: 0.3s;
    &:hover {
      background-color: #135074;
    }
  }
}
</style>
