<template>
  <div class="burger"
       :class="{ 'active' : active }"
       @click.prevent="toggleActive"
  >
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
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
    toggleActive () {
      this.$emit("burger")
    }
  }
}
</script>

<style scoped>
.burger-button {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  left: 145px;
  z-index: 10;
  margin-right: -15px;
  padding: 15px;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar {
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

.burger.active .burger-button {
  transform: rotate(-180deg);
}

.burger.active .burger-bar--1 {
  transform: rotate(45deg)
}

.burger.active .burger-bar--2 {
  opacity: 0;
}

.burger.active .burger-bar--3 {
  transform: rotate(-45deg)
}
</style>
