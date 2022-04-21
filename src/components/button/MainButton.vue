<template>
  <button
    class="bg-pink-600 text-white rounded-lg hover:bg-pink-800 border border-white px-5 py-3 transition duration-150"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Submit",
    },
  },
  prop: ["value"],
};
</script>
