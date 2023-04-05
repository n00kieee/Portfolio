<template>
  <transition name="fade">
    <div class="preloader">
      <div class="loading"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PreloaderPage",
}
</script>

<style scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 9999;
}

.loading {
  height: 70px;
  width:  70px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #00C4F0FF;
  border-radius: 100%;
  animation: rotate 0.75s linear infinite;
}

@keyframes rotate {
  to {transform: rotate(360deg) translatez(0);}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
