<template>
  <div class="checkbox-group">
    <UiCheckBox
      v-for="item of group"
      :key="item?.id"
      :label="item?.name"
      :value="item?.name"
      :checked="isCheckedItem(item)"
      :id="item?.id"
      name="mama"
      @changeBox="changeGroup(item, isCheckedItem(item))"
    />
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
import UiCheckBox from "./UiCheckBox.vue";

const emit = defineEmits(["changeList"]);

const props = defineProps({
  select: {
    type: Array,
  },
  group: {
    type: Array,
    required: true,
    validator(value) {
      const hasNameKey = value.every((option) => "name" in option);
      const hasIdKey = value.every((option) => "id" in option);
      return hasNameKey && hasIdKey;
    },
  },
});

const isCheckedItem = function (item) {
  return !!props.select.find((mark) => mark.id == item.id);
};

const changeGroup = (item, checked) => {
  let result;
  if (checked) {
    result = props.select.filter((car) => car.id !== item.id);
  } else {
    result = props.select.concat(item);
  }
  emit("changeList", result);
};
</script>
