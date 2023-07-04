<template>
  <div class="burger-menu"
       :class="{ 'close' : active }"
       @click.prevent="toggleActive"
  >
    <slot>
      <span></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BurgerBtnComponent',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    toggleActive() {
      this.$emit("burger")
    }
  }
}
</script>

<style scoped>
.burger-menu {
  cursor: pointer;
  height: 27px;
  width: 27px;
  margin: 15px;
  overflow: visible;
  position: relative;
  z-index: 5;
}

.burger-menu span,
.burger-menu span:before,
.burger-menu span:after {
  background: var(--color-text);
  display: block;
  height: 4px;
  opacity: 1;
  position: absolute;
  transition: 0.3s ease-in-out;
}

.burger-menu span:before,
.burger-menu span:after {
  content: "";
}

.burger-menu span {
  right: 0;
  top: 13px;
  width: 27px;
}

.burger-menu span:before {
  left: 0;
  top: -10px;
  width: 16px;
}

.burger-menu span:after {
  left: 0;
  top: 10px;
  width: 20px;
}

.burger-menu.close span {
  transform: rotate(-45deg);
  top: 13px;
  width: 27px;
}

.burger-menu.close span:before {
  top: 0;
  transform: rotate(90deg);
  width: 27px;
}

.burger-menu.close span:after {
  top: 0;
  left: 0;
  transform: rotate(90deg);
  opacity: 0;
  width: 0;
}
</style>
