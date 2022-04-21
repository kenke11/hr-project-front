<template>
  <FormCard class="mt-10">
    <form @submit.prevent="signup" class="w-full pt-10 px-10 w-full">
      <div class="w-full md:flex md:space-x-14">
        <div class="w-full">
          <MainInput
            name="Username"
            id="username"
            v-model.trim="username"
            :inputValidity="usernameValidity"
          />

          <MainInput
            name="Email"
            type="email"
            id="email"
            v-model.trim="email"
            :inputValidity="emailValidity"
          />

          <MainInput
            name="Password"
            type="password"
            id="password"
            v-model.trim="password"
            :inputValidity="passwordValidity"
          />

          <MainInput
            name="Repeat password"
            type="password"
            id="repeat_password"
            v-model.trim="repeat_password"
            :inputValidity="repeat_passwordValidity"
          />
        </div>
        <div class="w-full">
          <RegistrationSelect
            id="candidate_location"
            name="Candidate location"
            :values="countries"
            valueName="country"
            v-model="candidate_location"
            :selectValidity="candidate_locationValidity"
          />

          <RegistrationSelect
            id="position"
            name="Position"
            :values="positions"
            valueName="position"
            v-model="position"
            :selectValidity="positionValidity"
          />

          <RegistrationSelect
            id="skills"
            name="Skills"
            v-model="skills"
            :selectValidity="skillsValidity"
          />
        </div>
      </div>

      <div class="w-full md:flex md:space-x-14">
        <div class="w-full">
          <MainInput
            name="Full name"
            v-model.trim="full_name"
            :inputValidity="full_nameValidity"
          />
          <MainInput
            name="Phone number"
            type="number"
            v-model="phone_number"
            :inputValidity="phone_numberValidity"
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
</template>

<script>
import MainInput from "@/components/inputs/MainInput.vue";
import RegistrationSelect from "@/components/inputs/RegistrationSelect.vue";
import RegistrationFileInput from "@/components/inputs/RegistrationFileInput.vue";
import MainButton from "@/components/button/MainButton.vue";
import FormCard from "@/components/forms/formCard.vue";

export default {
  data() {
    return {
      username: "",
      usernameValidity: "isValid",
      email: "",
      emailValidity: "isValid",
      password: "",
      passwordValidity: "isValid",
      repeat_password: "",
      repeat_passwordValidity: "isValid",
      candidate_location: "",
      candidate_locationValidity: "isValid",
      position: "",
      positionValidity: "isValid",
      skills: "",
      skillsValidity: "isValid",
      full_name: "",
      full_nameValidity: "isValid",
      phone_number: null,
      phone_numberValidity: "isValid",
      cv: "",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  async mounted() {
    this.$store.dispatch("countries/fetchCountries");
    this.$store.dispatch("positions/fetchPositions");
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
  },
  methods: {
    validation() {
      if (this.username === "" || this.username.length < 3) {
        this.usernameValidity = "invalid";
      } else {
        this.usernameValidity = "isValid";
      }

      if (this.email === "") {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "isValid";
      }

      if (this.password === "" || this.password.length < 7) {
        this.passwordValidity = "invalid";
      } else {
        this.passwordValidity = "isValid";
      }

      if (
        this.repeat_password !== this.password ||
        this.repeat_password < 7 ||
        this.repeat_password === ""
      ) {
        this.repeat_passwordValidity = "invalid";
      } else {
        this.repeat_passwordValidity = "isValid";
      }

      if (this.candidate_location === "") {
        this.candidate_locationValidity = "invalid";
      } else {
        this.candidate_locationValidity = "isValid";
      }

      if (this.position === "") {
        this.positionValidity = "invalid";
      } else {
        this.positionValidity = "isValid";
      }
      if (this.skills === "") {
        this.skillsValidity = "invalid";
      } else {
        this.skillsValidity = "isValid";
      }
      if (this.full_name === "") {
        this.full_nameValidity = "invalid";
      } else {
        this.full_nameValidity = "isValid";
      }

      if (this.phone_number === null) {
        this.phone_numberValidity = "invalid";
      } else {
        this.phone_numberValidity = "isValid";
      }

      let valuesValidation = [
        this.usernameValidity,
        this.emailValidity,
        this.passwordValidity,
        this.repeat_passwordValidity,
        this.candidate_locationValidity,
        this.positionValidity,
        this.skillsValidity,
        this.full_nameValidity,
        this.phone_numberValidity,
      ];

      valuesValidation.forEach((value) => {
        if (value === "isValid") {
          this.formIsValid = true;
        } else {
          return (this.formIsValid = false);
        }
      });
      return this.formIsValid;
    },
    signup() {
      this.validation();
      if (this.validation() === false) {
        console.log("invalid");
      } else {
        console.log("valid");
      }

      // console.log(this.cv);
      // this.$store.dispatch("signup", {});
    },
  },
};
</script>
