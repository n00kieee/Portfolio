<template>
  <span ref="scrollBtn" @click="scrollToTop" class="scroll-btn">
    <ScrollUpIcon/>
  </span>
</template>

<script setup>
import {onMounted, ref, onBeforeMount} from "vue";
import ScrollUpIcon from "@/components/Icons/ScrollUpIcon.vue";

const scrollBtn = ref();

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

const userScroll = () => {
  if (window.scrollY > 0) {
    scrollBtn.value.classList.add("show");
  } else {
    scrollBtn.value.classList.remove("show");
  }
};

onMounted(() => {
  window.addEventListener("scroll", userScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", userScroll);
});
</script>

<style scoped>
.scroll-btn {
  cursor: pointer;
  position: fixed;
  bottom: 65px;
  display: none;
  right: 100px;
  color: var(--color-text);
}

.show {
  display: block;
  animation-duration: 2s;
  animation-name: opacity;
}

@-webkit-keyframes opacity {
  from {
    opacity: 0;
    transition: opacity 250ms ease 0ms;
  }
  to {
    opacity: 1;
    transition: opacity 250ms ease 500ms;
  }
}

@media screen and (max-width: 768px) {
  .scroll-btn {
    right: 5px;
  }
}
</style>
