<template>
  <div class="chat-area inset-shadow">
    <div class="image full-width full-height">
      <Message
        v-for="item in messages"
        :key="item.id"
        :text="item.text"
        :hour="item.hour"
        :my="my(item.userId)"
      />
    </div>
  </div>
</template>

<script>
import api from "src/services/api";
import Message from "src/components/Message/Index";
export default {
  name: "ChatArea",
  props: ["currentUser", "newMessages"],
  data() {
    return {
      messages: [],
      myId: localStorage.getItem("myId"),
    };
  },
  components: {
    Message,
  },

  async mounted() {
    await this.getMessages();
  },
  watch: {
    async currentUser() {
      this.messages = [];
      await this.getMessages();
    },
    async newMessages() {
      await this.getMessages();
    },
  },
  methods: {
    async getMessages() {
      await api
        .get(`messages/${this.currentUser}/${this.myId}`)
        .then((response) => {
          this.messages = response.data;
        })
        .catch(() => {});
    },
    my(messageUserId) {
      return this.myId === messageUserId.toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-area {
  height: calc(80vh - 69px - 62px);
  min-width: 800px;
  width: calc(50vw);
  margin-right: calc(100vw / 6);
  background-color: $tres;
}
.image {
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
</style>
