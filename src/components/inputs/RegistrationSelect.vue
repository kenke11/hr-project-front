<template>
  <div class="w-full mt-5">
    <label
      :for="id"
      class="w-full text-lg font-md font-medium mt-2"
      :class="{ 'text-red-500': selectValidity === 'invalid' }"
    >
      {{ name }}
    </label>
    <select
      :id="id"
      :class="{ 'border-red-500': selectValidity === 'invalid' }"
      class="w-full bg-none border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-800 focus:decoration-blue-800 focus:ring-2 h-10 px-4 py-2 mt-2"
      :value="field.value.value"
      @input="field.handleChange"
      @blur="field.handleBlur"
    >
      <option :value="null" hidden></option>
      <option
        v-for="value in values"
        :key="value.id"
        class="px-4"
        :value="value[valueName]"
      >
        {{ value[valueName] }}
      </option>
    </select>
    <p class="h-3">
      <small v-if="selectValidity === 'invalid'" class="text-red-500">
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
    name: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    values: {
      type: Array,
    },
    valueName: {
      type: String,
      default: "name",
    },
    field: {
      type: Object,
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
