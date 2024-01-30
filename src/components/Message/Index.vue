<template>
  <div class="row" :class="my ? 'justify-end' : 'justify-start'">
    <div
      class="message items-start column q-py-sm q-px-md q-ma-sm"
      :class="my ? 'my' : 'other'"
    >
      <div class=" text shadow-5 q-py-sm q-px-md">
        {{ text }}
      </div>
      <span>{{ hour }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "hour", "my"],
  name: "Message",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

span {
    font-size: 12px;
    color: $quatro;
  }
.text {
  height: auto;
  border-radius: 20px;
  transition: 0.3s;
  background-color: $tres;
  color: $cinco;
  width: auto;
}
.my .text {
  background-color: $dois;
}
.other .text{
  background-color: $um;
}
</style>
