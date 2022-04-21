<template>
  <div class="w-full mt-5">
    <label
      :for="id"
      :class="{ 'text-red-500': inputValidity === 'invalid' }"
      class="w-full text-lg font-md font-medium mt-2"
    >
      {{ name }}
    </label>
    <input
      :class="{ ['border-red-500']: inputValidity === 'invalid' }"
      class="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-800 focus:decoration-blue-800 focus:ring-2 px-4 py-2 mt-2"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
    />

    <p class="h-3">
      <small v-if="inputValidity === 'invalid'" class="text-red-500">
        {{ `This ${name} invalid` }}
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
    modelValue: {
      type: String,
      default: "",
    },
    inputValidity: {
      type: String,
      default: "isValid",
    },
  },
  prop: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
