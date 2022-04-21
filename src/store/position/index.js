import mutations from "@/store/position/mutations.js";
import actions from "@/store/position/actions.js";
import getters from "@/store/position/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      positions: [],
    };
  },
  mutations,
  actions,
  getters,
};
