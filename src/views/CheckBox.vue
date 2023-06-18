<template>
  <div class="wrapper-main">
    <h1>CheckBox</h1>
    <hr />
    <h2>Активный чекбокс</h2>
    <UiCheckBox
      label="Я децл помогите мне"
      value="Putin"
      :checked="isChecked"
      id="12"
      name="president"
      @changeBox="isChecked = !isChecked"
    />
    <h2>Неактивный чекбокс</h2>
    <UiCheckBox
      label="Принимаю политику об обработке"
      value="Mama"
      :changeBox="isCheckedTwo"
      id="10"
      name="mama"
      @change="isCheckedTwo = !isCheckedTwo"
      :disabled="true"
    />
    <h2>Группа чекбоксов</h2>
    <UiCheckBoxGroup
      @changeList="changeList"
      :select="selectedMark"
      :group="markAutoList"
    />
    <div class="result">
      <span>Выбрано:</span>

      <div>
        <p v-for="mark of selectedMark" :key="mark.id">{{ mark.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import UiCheckBox from "../components/ui/CheckBox/UiCheckBox.vue";
import UiCheckBoxGroup from "../components/ui/CheckBox/UiCheckBoxGroup.vue";
import { ref } from "vue";
export default {
  components: {
    UiCheckBox,
    UiCheckBoxGroup,
  },
  setup() {
    const isChecked = ref(false);
    const isCheckedTwo = ref(false);
    const selectedMark = ref([
      { name: "BMW", id: "02" },
      { name: "Lada", id: "03" },
      { name: "Nisan", id: "05" },
    ]);
    const markAutoList = ref([
      { name: "Audi", id: "01" },
      { name: "BMW", id: "02" },
      { name: "Lada", id: "03" },
      { name: "KIA", id: "04" },
      { name: "Nisan", id: "05" },
    ]);

    const changeList = (newValue) => {
      selectedMark.value = newValue;
    };

    return {
      isChecked,
      isCheckedTwo,
      markAutoList,
      selectedMark,
      changeList,
    };
  },
};
</script>
<style scoped lang="scss">
.result {
  display: flex;
  p {
    display: inline-block;
    margin: 0px 10px;
  }
}
</style>
