<template>
  <div class="w-full mt-5">
    <label :for="id" class="w-full text-lg font-md font-medium mt-2">
      {{ name }}
    </label>
    <input
      class="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-800 focus:decoration-blue-800 focus:ring-2 px-4 py-2 mt-2"
      :type="type"
      :id="id"
      :value="field.value.value"
      @input="field.handleChange"
      @blur="field.handleBlur"
    />

    <p class="h-3">
      <small
        v-if="field.meta.touched && !field.meta.valid"
        class="text-red-500"
      >
        {{ field.errorMessage }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    field: {
      type: Object,
    },
  },
};
</script>
