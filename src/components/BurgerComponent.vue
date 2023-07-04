<template>
  <div class="sidebar">
    <div class="sidebar-backdrop"></div>
      <div class="sidebar-panel">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "BurgerComponent",
};
</script>

<style>
.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0;
  background-color: #130f40;
  box-shadow: -10px 0 30px -15px var(--shadow);
  z-index: 9;
  transform: translateX(0vw);
  transition: var(--transition);
  text-align: center;
}
</style>
