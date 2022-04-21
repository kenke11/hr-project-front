import axios from "axios";

export default {
  async fetchPositions(context) {
    try {
      const positions = await axios.get(
        `${process.env.VUE_APP_API_PATH}/positions`
      );

      context.commit("updatePositions", positions.data);
    } catch (error) {
      console.error(error);
    }
  },
};
