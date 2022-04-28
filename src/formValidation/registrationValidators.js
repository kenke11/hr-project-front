import { defineRule } from "vee-validate";
import { email, required, min, max } from "@vee-validate/rules";

defineRule("username", (value) => {
  if (email(value) && required(value)) {
    return true;
  }

  return "A valid username is required";
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

defineRule("confirmPassword", (value, [target], ctx) => {
  if (required(value) && value === ctx.form[target]) {
    return true;
  }

  return "Password must match";
});

defineRule("fullName", (value) => {
  if (required(value)) {
    return true;
  }

  return "A valid full name is required";
});

defineRule("phoneNumber", (value) => {
  if (required(value)) {
    return true;
  }

  return "A valid phone number is required";
});
