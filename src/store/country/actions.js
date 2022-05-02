import axios from "axios";

export default {
  async fetchCountries(context) {
    try {
      const countries = await axios.get(
        `${process.env.VUE_APP_API_PATH}/countries`
      );
      let response = await countries.data;

      context.commit("updateCountries", response);
    } catch (error) {
      console.error(error);
    }
  },
};
