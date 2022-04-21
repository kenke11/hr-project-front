import axios from "axios";

export default {
  login() {},
  async signup(context, payload) {
    console.log("context - ", context);
    console.log("payload - ", payload);

    try {
      await axios.post(`${process.env.VUE_APP_API_PATH}/signup`, {});
    } catch (error) {
      console.error(error);
    }
  },
};
