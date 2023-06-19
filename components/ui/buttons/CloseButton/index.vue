<script>
export default {
  name: 'CloseButton',
};
</script>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
});

</script>

<template>
  <component
      :is="props.tag"
      ref="root"
      type="button"
      class="button-close"
  />
</template>

<style src="./style.scss" lang="scss" scoped/>
