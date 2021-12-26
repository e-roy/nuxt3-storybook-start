<template>
  <button class="base" :class="typeClass">
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Button",
      requried: true,
    },
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    typeClass() {
      return this.type === "primary"
        ? "bg-neutral-600 text-utility-light hover:bg-neutral-700"
        : "bg-white text-neutral-600 hover:bg-neutral-100";
    },
  },
};
</script>

<style lang="postcss" scoped>
.base {
  @apply text-sm font-medium px-6 py-4 rounded-[10px] border border-neutral-600 transition-colors;
}
</style>
