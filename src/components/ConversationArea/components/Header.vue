<template>
  <div class="container-header">
    <div class="row items-center justify-around container-actions">
      <q-avatar size="40px" class="q-px-md">
        <img src="https://i.pravatar.cc/40"/>
      </q-avatar>
      <div class="column items-center ">
        <span>Augusto Reis</span>
        <div class="flex items-center justify-center">
          <q-icon
            class="fa-solid fa-circle q-mr-sm"
            :color="status ? 'yellow' : 'white'"
            size="8px"
          ></q-icon>
          <span class="on-status">Online</span>
        </div>
      </div>
      <div class="row items-center justify-center">
        <q-btn
          round
          dense
          unelevated
          icon="fas fa-ellipsis-v"
          size="11px"
          class="q-mr-sm"
        ></q-btn>
      </div>
    </div>
    <div class="search row flex-center full-width q-pa-sm">
      <q-input
        placeholder="Pesquisar..."
        borderless
        dark
        rounded
        class="input-search shadow-5"
      >
        <template v-slot:prepend>
          <q-icon name="search" size="20px" />
        </template>
      </q-input>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      status: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.container-header {
  height: 118px;
  color: white;
  .on-status {
    text-transform: uppercase;
    font-size: 12px;
  }
}
span {
  font-size: 16px;
}
.container-actions {
  border-top-left-radius: 10px;
  background-color: $dois;
  height: 69px;
}
.search {
  background-color: $dois;
}
.input-search {
  width: 80%;
  border-radius: 20px;
  line-height: 1.5;
  background-color: $um;
  padding: 0 10px;
  transition: 0.3s;
  &:hover {
    width: 85%;
  }
}
.status{
  background-color: aqua;
}
</style>
