<template>
  <slot>
  </slot>
</template>

<script>
export default {
  name: "BurgerComponent",
};
</script>

<style>
.blur {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: var(--color-blurred-background);
  backdrop-filter: blur(8px);
  animation-duration: 1s;
  animation-name: opacity;
}

@keyframes opacity {
  from {
    opacity: 0;
    transition: opacity 250ms ease 0ms;
  }

  to {
    opacity: 1;
    transition: opacity 250ms ease 500ms;
  }
}
</style>
