<template>
  <div class="conversation-area">
    <Header />
    <div class="card-area">
      <div
        class="card row items-center justify-between q-px-md"
        v-for="item in currentUsers"
        :key="item.id"
        @click="seeConversation(item.id, item.email)"
      >
        <q-avatar size="40px" class="q-mr-sm">
          <img src="https:i.pravatar.cc/40" />
        </q-avatar>
        <div class="message column justify-center full-height ">
          <div class="row justify-between">
            <div class="column">
              <span>{{ item.name }}</span>
              <span v-if="item.newMessage">Nova Mensagem recebida</span>
              <span v-else>Veja a nossa ultima conversa...</span>
            </div>
            <div class="column items-center justify-center">
              <span>7:31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "ConversationArea",
  props: ["users"],
  data() {
    return {
      currentUsers: [],
    };
  },
  watch: {
    users() {
      this.currentUsers = this.users;
    },
  },
  mounted() {
    this.currentUsers = this.users;
  },
  methods: {
    seeConversation(id, email) {
      this.$emit("selectedItem", { id, email });
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.conversation-area {
  padding-left: 10px;
  margin-left: calc(100vw / 6);
  height: 80vh;
  width: 300px;
  border-radius: 10px 0  0 10px;
  background-color:$dois;
}
.card-area {
  height: calc(70vh - 27px);
  overflow: auto;
  color: $cinco;
}
.card {
  height: 74px;
  &:hover {
    border-radius: 10px 0px 0px 10px;
    background-color: $um;
  }

}

.message {
  flex-grow: 5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 150px;

  span:first-child {
    font-size: 16px;
  }
  span:last-child {
    color: $quatro;
    font-size: 12px;
  }

}


</style>
