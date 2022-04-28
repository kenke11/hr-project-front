<template>
  <FormCard class="mt-10">
    <form @submit.prevent="submit" class="w-full pt-10 px-10 w-full">
      <div class="w-full md:flex md:space-x-14">
        <div class="w-full">
          <MainInput
            name="Username"
            id="username"
            type="text"
            :field="usernameField"
          />

          <MainInput id="email" name="Email" type="email" :field="emailField" />

          <MainInput
            id="password"
            name="Password"
            type="password"
            :field="passwordField"
          />

          <MainInput
            name="Confirm password"
            type="password"
            id="confirm_password"
            :field="confirmationPasswordField"
          />
        </div>

        <div class="w-full">
          <RegistrationSelect
            id="candidate_location"
            name="Candidate location"
            valueName="country"
          />

          <RegistrationSelect
            id="position"
            name="Position"
            valueName="position"
          />

          <div class="w-full mt-5">
            <button type="button" class="text-lg font-md font-medium mt-3">
              Skills
            </button>
            <div class="w-full">
              <button
                type="button"
                class="hover:bg-gray-400 cursor-pointer bg-gray-300 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-800 focus:decoration-blue-800 focus:ring-2 h-10 px-4 py-2 mt-2"
                @click="modalOpenOrClose"
              >
                Add skills +
              </button>
            </div>
            <div class="space-x-2 max-w-52">
              <button
                v-for="skill in skills"
                :key="skill.id"
                class="hover:bg-gray-400 cursor-pointer bg-gray-300 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-800 focus:decoration-blue-800 focus:ring-2 h-10 px-4 py-2 mt-2"
              >
                {{ skill.skill }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:flex md:space-x-14">
        <div class="w-full">
          <MainInput name="Full name" :field="fullNameField" />
          <MainInput
            name="Phone number"
            type="number"
            :field="phoneNumberField"
          />
        </div>

        <div class="w-full">
          <RegistrationFileInput v-model="cv" />
        </div>
      </div>

      <div class="mb-10 mt-10 flex justify-between mr-5">
        <RouterLink class="text-blue-600 space-x-2" to="/login">
          <span class="text-gray-400">Already have an account?</span>
          <span class="font-semibold text-black">Login</span>
        </RouterLink>

        <MainButton name="Signup" />
      </div>
    </form>
  </FormCard>

  <div
    class="w-full h-screen fixed flex items-center justify-center rounded-lg"
    v-if="modalOpened"
  >
    <div
      class="w-full h-full bg-gray-600 opacity-75 top-0 bottom-0 right-0 left-0 absolute"
      @click="modalOpenOrClose"
    ></div>
    <div class="absolute w-1/3 bg-white z-50 py-4 px-2 max-h-184">
      <h3 class="font-semibold">Add Skills</h3>
      <input
        class="w-full border-gray-400 border bg-gray-300 rounded-lg py-2 px-3"
        type="search"
        v-model="searchSkills"
      />
      <div class="mt-5 px-3 max-h-52 space-x-2 space-y-2 overflow-auto">
        <button
          v-for="skill in resultQuery"
          :key="skill.id"
          class="border-2 border-gray-400 bg-gray-300 rounded-lg px-2 py-1 hover:bg-gray-400 cursor-pointer"
          @click="addSkill(skill.skill, skill.id)"
        >
          {{ skill.skill }}
        </button>
      </div>
      <div class="mt-3">
        <h3 class="font-semibold">My Skills</h3>
        <div class="px-3 mt-3 space-x-2 space-y-2 max-h-52 overflow-auto">
          <button
            v-for="skill in skills"
            :key="skill.id"
            class="border-2 border-gray-400 bg-gray-200 rounded-lg px-2 py-1 hover:bg-gray-300 cursor-pointer"
            @click="removeSkill(skill.id, skill.skill)"
          >
            {{ skill.skill }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainInput from "@/components/inputs/MainInput.vue";
import RegistrationSelect from "@/components/inputs/RegistrationSelect.vue";
import RegistrationFileInput from "@/components/inputs/RegistrationFileInput.vue";
import MainButton from "@/components/button/MainButton.vue";
import FormCard from "@/components/forms/formCard.vue";
import "@/formValidation/registrationValidators.js";
import { reactive, watch, computed } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  data() {
    return {
      skills: [],
      formIsValid: true,
      isLoading: false,
      error: null,
      modalOpened: false,
    };
  },
  async mounted() {
    this.$store.dispatch("countries/fetchCountries");
    this.$store.dispatch("positions/fetchPositions");
    this.$store.dispatch("skills/fetchSkills");
  },
  setup() {
    const { meta: formMeta, handleSubmit } = useForm();
    const usernameField = reactive(useField("username", "username"));
    const emailField = reactive(useField("email", "email"));
    const passwordField = reactive(useField("password", "password"));

    const submitForm = handleSubmit((formValues) => {
      return {
        username: formValues.usename,
        email: formValues.email,
        password: formValues.password,
      };
    });

    const confirmPasswordValidator = computed(() => {
      return "confirmPassword:password";
    });

    const confirmationPasswordField = reactive(
      useField("confirmPassword", confirmPasswordValidator)
    );

    watch(() => {
      confirmationPasswordField.validate();
    });

    const fullNameField = reactive(useField("fullName", "fullName"));

    const phoneNumberField = reactive(useField("phoneNumber", "phoneNumber"));

    return {
      usernameField,
      emailField,
      passwordField,
      confirmationPasswordField,
      fullNameField,
      phoneNumberField,
      submitForm,
      formMeta,
    };
  },
  components: {
    FormCard,
    MainButton,
    RegistrationFileInput,
    RegistrationSelect,
    MainInput,
  },
  computed: {
    countries() {
      return this.$store.getters["countries/allCountries"];
    },
    positions() {
      return this.$store.getters["positions/allPositions"];
    },
    resultQuery() {
      if (this.searchSkills) {
        return this.$store.getters["skills/allSkills"].filter((skill) => {
          return this.searchSkills
            .toLowerCase()
            .split(" ")
            .every((v) => skill.skill.toLowerCase().includes(v));
        });
      } else {
        return this.$store.getters["skills/allSkills"];
      }
    },
  },
  methods: {
    modalOpenOrClose() {
      if (this.modalOpened === true) {
        this.modalOpened = false;
      } else {
        this.modalOpened = true;
      }
    },
    addSkill(skill, id) {
      console.log(skill, id);
      this.skills.push({ skill, id });
      this.resultQuery.splice({ id, skill }, 1);
      console.log(this.resultQuery);
    },
    removeSkill(id, skill) {
      this.skills.splice(skill.id, 1);
      this.resultQuery.push({ id: id, skill: skill });
    },
    submit() {},
  },
};
</script>
