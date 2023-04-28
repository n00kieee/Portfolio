<template>
  <label v-if="label" :for="id">
    {{ label }}
  </label>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :required="required"
    :name="name"
    @input="inputHandler"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      default: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    inputHandler(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--ligth);
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

label {
  float: left;
  color: var(--ligth);
}
</style>
