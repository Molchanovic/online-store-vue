<template>
  <div class="wrapper-main">
    <h1>Button</h1>
    <hr />
    <h2>Colors</h2>
    <UiButton label="Отправить" />
    <UiButton :color="'green'" label="Подтвердить" />
    <UiButton :color="'orange'" label="Call Back" />
    <UiButton :color="'pink'" label="Отмена" />
    <UiButton :color="'blue'" label="Выбрать" />
    <hr />
    <h2>Border</h2>
    <UiButton :rounded="20" label="Отправить" />
    <UiButton :rounded="10" :color="'green'" label="Подтвердить" />
    <UiButton :rounded="30" :color="'orange'" label="Call Back" />
    <UiButton :rounded="40" :color="'pink'" label="Отмена" />
    <UiButton :rounded="25" :color="'blue'" label="Выбрать" />
    <h2>Outlined</h2>
    <UiButton :outlined="true" :rounded="20" label="Отправить" />
    <UiButton
      :outlined="true"
      :rounded="10"
      :color="'green'"
      label="Подтвердить"
    />
    <UiButton
      :outlined="true"
      :rounded="30"
      :color="'orange'"
      label="Call Back"
    />
    <UiButton :outlined="true" :rounded="40" :color="'pink'" label="Отмена" />
    <UiButton
      :outlined="true"
      @click="openMessage"
      :rounded="25"
      :color="'blue'"
      label="Выбрать"
    />
    <h2>Disabled</h2>
    <UiButton
      :disabled="true"
      :outlined="true"
      :rounded="30"
      :color="'orange'"
      label="Call Back"
    />
    <UiButton
      :disabled="true"
      :outlined="true"
      :rounded="30"
      :color="'green'"
      label="Call Back"
    />
  </div>
</template>
<script>
import UiButton from "@/components/ui/Button/UiButton.vue";
export default {
  components: {
    UiButton,
  },
  methods: {
    openMessage(number) {
      alert("Сообщение получено! " + number);
    },
  },
};
</script>
