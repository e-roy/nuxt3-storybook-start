<template>
  <div>
    <div class="text-neutral-400">{{ convertAddress }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    address: {
      type: String,
      default: "",
    },
    shortened: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    convertAddress() {
      if (this.shortened) {
        if (
          this.address.includes(".eth") ||
          this.address === "" ||
          this.address === "Not connected"
        ) {
          return this.address;
        } else {
          return (
            this.address.substring(0, 4) +
            "..." +
            this.address.substring(this.address.length - 4)
          ).toLowerCase();
        }
      } else return this.address;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
