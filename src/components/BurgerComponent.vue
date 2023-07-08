<template>
  <div class="blur">
    <slot>
    </slot>
  </div>
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
}
</style>
