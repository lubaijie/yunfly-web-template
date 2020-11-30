<template>
  <div class="main-container" :style="{ minHeight: `${contentHeight - 8}px` }">
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, unref, computed, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'MainContainer',
    setup() {
      const contentHeight = ref<number>(0);
      onMounted(() => {
        const el = unref(inject('layoutContent')) as HTMLElement;
        contentHeight.value = el.clientHeight;
      });

      return {
        contentHeight,
      };
    },
  });
</script>

<style lang="less" scoped>
  .main-container {
    padding: 10px 15px;
    margin: 8px 8px 0 8px;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
  }
</style>
