<template>
  <button
    class="btn-static"
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
  border: 1px solid var(--color-main);
  padding: 12px 20px;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border: v-bind(border);
  width: v-bind(width);
  height: v-bind(height);
}

.btn-static:hover {
  background-color: v-bind(hoverColor);
}
</style>
