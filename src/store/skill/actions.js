import axios from "axios";

export default {
  async fetchSkills(context) {
    try {
      const skills = await axios.get(`${process.env.VUE_APP_API_PATH}/skills`);

      context.commit("updateSkills", skills.data);
    } catch (error) {
      console.error(error);
    }
  },
};
