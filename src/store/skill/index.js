import mutations from "@/store/skill/mutations.js";
import actions from "@/store/skill/actions.js";
import getters from "@/store/skill/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      skills: [],
    };
  },
  mutations,
  actions,
  getters,
};
