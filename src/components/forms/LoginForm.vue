<template>
  <FormCard>
    <form @submit.prevent="login" class="w-full pt-10 px-10 w-full">
      <MainInput id="email" name="Email" type="email" :field="emailField" />

      <MainInput
        id="password"
        name="Password"
        type="password"
        :field="passwordField"
      />

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
import MainInput from "@/components/inputs/MainInput.vue";
import MainButton from "@/components/button/MainButton.vue";
import "@/formValidation/loginValidators.js";
import { reactive } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
    isSubmitting: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    MainButton,
    FormCard,
    MainInput,
  },
  setup() {
    const { meta: formMeta, handleSubmit } = useForm();
    const emailField = reactive(useField("email", "email"));
    const passwordField = reactive(useField("password", "password"));

    const submitForm = handleSubmit((formValues) => {
      return {
        email: formValues.email,
        password: formValues.password,
      };
    });

    return {
      emailField,
      passwordField,
      submitForm,
      formMeta,
    };
  },
  methods: {
    login() {
      if (this.formMeta.valid) {
        console.log(
          this.emailField.value.value,
          this.passwordField.value.value
        );
      } else {
        console.log(this.formMeta.valid);
      }
    },
  },
};
</script>
