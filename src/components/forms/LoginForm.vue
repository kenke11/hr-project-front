<template>
  <FormCard>
    <form @submit.prevent="login" class="w-full pt-10 px-10 w-full">
      <Input name="Email" type="email" />

      <Input name="Password" type="password" />

      <div class="mb-10 mt-10 flex justify-between mr-5">
        <RouterLink class="text-blue-600" to="/forgot-password">
          Forgot password?
        </RouterLink>
        <MainButton name="Login" />
      </div>
      <div class="flex justify-center mb-5">
        <RouterLink class="space-x-2" to="/new-candidate">
          <span class="text-gray-400">Don't have and account?</span>
          <span class="font-semibold text-black">Sign up</span>
        </RouterLink>
      </div>
    </form>
  </FormCard>
</template>

<script>
import FormCard from "@/components/forms/formCard.vue";
import Input from "@/components/inputs/MainInput.vue";
import MainButton from "@/components/button/MainButton.vue";

export default {
  components: { MainButton, FormCard, Input },
  methods: {
    login() {
      console.log(process.env.VUE_APP_API_PATH);
    },
  },
};
</script>
