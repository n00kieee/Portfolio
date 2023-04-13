<template>
  <button class="static" :class="setClass"></button>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["click"]);

const props = defineProps({});

const onClickHandler = () => {
  emit("click");
};

const setClass = computed(() => {});
</script>

<style scoped></style>
