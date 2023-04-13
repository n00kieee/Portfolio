<template>
  <button
    class="btn-static"
    :style="{
      color: `var(--${color})`,
      backgroundColor: `var(--${backgroundColor})`,
      border: border,
      width: width,
      height: height,
    }"
    :type="type"
    @click="onClickHandler"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    color: {},
    backgroundColor: {},
    border:{},
    width: {},
    height: {},
    hoverColor: {},
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    onClickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn-static {
  transition: var(--transition);
  cursor: pointer;
  border-radius: 8px;
  box-shadow: var(--shadow);
  border: 1px solid var(--mainColor);
  padding: 12px 20px;
}

.btn-static:hover {
  background: v-bind(hoverColor);
}
</style>
