<template>
  <button
    :disabled="disabled"
    :class="[
      'btn',
      `${color ? 'btn_' + color : ''}`,
      { disabled: disabled },
      { outlined: outlined },
    ]"
    :style="{ borderRadius: rounded + 'px' }"
    @click="clickByButton"
  >
    {{ label }}
  </button>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Number,
    default: 7,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);

const clickByButton = () => {
  console.log(21312);
  emit("click", 12);
};
</script>
<style scoped lang="scss" src="./style.scss"></style>
