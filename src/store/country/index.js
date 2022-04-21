import mutations from "@/store/country/mutations.js";
import actions from "@/store/country/actions.js";
import getters from "@/store/country/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      countries: [],
    };
  },
  mutations,
  actions,
  getters,
};
