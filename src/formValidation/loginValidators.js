import { defineRule } from "vee-validate";
import { email, required, min, max } from "@vee-validate/rules";

defineRule("username", (value) => {
  if (
    required(value) &&
    min(value, { length: 3 }) &&
    max(value, { length: 20 })
  ) {
    return true;
  }

  return "A valid email address is required";
});

defineRule("email", (value) => {
  if (email(value) && required(value)) {
    return true;
  }

  return "A valid email address is required";
});

defineRule("password", (value) => {
  if (
    required(value) &&
    min(value, { length: 7 }) &&
    max(value, { length: 30 })
  ) {
    return true;
  }

  return "Password must be between 7 and 30 characters";
});
