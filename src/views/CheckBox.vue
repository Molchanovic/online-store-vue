<template>
  <div class="wrapper-main">
    <h1>CheckBox</h1>
    <hr />
    <UiCheckBox
      label="Путин"
      value="Putin"
      :checked="isChecked"
      id="12"
      name="president"
      @change="isChecked = !isChecked"
    />
    <UiCheckBox
      label="Мама"
      value="Mama"
      :checked="isCheckedTwo"
      id="10"
      name="mama"
      @change="isCheckedTwo = !isCheckedTwo"
    />
  </div>
</template>
<script>
import UiCheckBox from "../components/ui/CheckBox/UiCheckBox.vue";
import { ref } from "vue";
export default {
  components: {
    UiCheckBox,
  },
  setup() {
    const isChecked = ref(false);
    const isCheckedTwo = ref(false);

    return {
      isChecked,
      isCheckedTwo,
    };
  },
};
</script>
