<template>
  <transition name="fade">
    <div class="loader">
      <LogoIcon/>
      <span></span>
    </div>
  </transition>
</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";

export default {
  name: "PreloaderPage",
  components: { LogoIcon },
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: #006eff;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #006eff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.loader:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #006eff;
  border-right: 3px solid #006eff;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

.loader svg {
  position: absolute;
  top: 32%;
  right: 32%;
}

span {
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
}

span:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #006eff;
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px #006eff;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
