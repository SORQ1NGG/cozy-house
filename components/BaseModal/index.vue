<script>
export default {
  name: 'BaseModal',
};
</script>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import CloseButton from "../ui/buttons/CloseButton";

const emit = defineEmits(['close']);

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
  loadingUserInfo: {
    type: Boolean,
  },
});
const root = ref(null);

const isOpened = ref(false);

const toggleOpened = force => {
  isOpened.value = force ?? !isOpened.value;
};

const close = () => {
  if (!isOpened.value) return;

  emit('close');
};

onMounted(() => {
  toggleOpened(true);
});

onUnmounted(() => {
  toggleOpened(false);
});
</script>

<template>
  <div
      ref="root"
      class="modal-mask"
  >
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <CloseButton @click="close"/>
        </div>
        <div class="modal-body">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped/>
