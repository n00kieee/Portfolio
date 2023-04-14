<template>
  <textarea
    class="static-textarea"
    :name="name"
    :value="modelValue"
    :cols="cols"
    :rows="rows"
    @textarea="textArea"
  >
  </textarea>
</template>

<script>
export default {
  name: "CustomTextArea",
  props: {
    name: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    textArea(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  },
};
</script>

<style scoped>
.static-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--ligth);
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>
