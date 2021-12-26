<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1">
      <input
        :name="name"
        :type="type"
        :value="value"
        class="shadow-sm block w-full border py-1 px-2 sm:text-sm border-gray-300 rounded-md"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {},
};
</script>
