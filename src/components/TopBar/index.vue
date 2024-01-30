<template>
  <div class="top-bar row items-center justify-between">
    <div class=" q-ml-xl">
      <q-avatar size="40px" class=" q-mr-md">
        <img src="https://i.pravatar.cc/40" alt="" />
      </q-avatar>
      <q-icon
        class="fa-solid fa-angle-right q-mr-sm"
        size="20px"
      ></q-icon>
    </div>
    <div class="column items-center ">
      <span>{{ title }}</span>
      <div class="row items-center">
        <q-icon
          class="fa-solid fa-circle q-mr-sm"
          :color="status ? 'yellow' : 'white'"
          size="8px"
        ></q-icon>
        <span class="on-status">Online</span>
      </div>
    </div>
    <div>
      <q-btn
        round
        dense
        unelevated
        icon="fas fa-ellipsis-v"
        text-color="white"
        size="15px"
        class="q-mr-xl"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "TopBar",
  data() {
    return {
      status:true
    };
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  z-index: 10;
  color: white;
  border-top-right-radius: 10px;
  margin-right: calc(100vw / 6);
  height: 69px;
  background-color: $tres;
  .on-status {
    text-transform: uppercase;
    font-size: 12px;
  }
}
</style>
