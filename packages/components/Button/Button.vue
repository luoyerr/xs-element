<script setup lang="ts">
import {ref} from "vue";
import type {ButtonProps} from "./types.ts";
import {size} from "lodash-es";

defineOptions({
    name:"ErButton"
})

const props = withDefaults(defineProps<ButtonProps>(),{
    // 设置默认值
    tag:'button',
    nativeType:"button",
});



const _ref = ref<HTMLElement>();

// const slots = defineSlots();

</script>

<template>
  <component
  :is="props.tag"
  ref="_ref"
  class="er-button"
  :type="tag == 'button' ? nativeType : void 0"
  :disabled="disabled || loading ? true : void 0"
  :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`] :size,
      'is-disabled':disabled,
      'is-loading':loading,
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle
  }"

  >
      <slot/>
  </component>
</template>

<style scoped>

</style>
