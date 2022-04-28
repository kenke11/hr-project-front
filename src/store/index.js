import { createStore } from "vuex";

import authModule from "@/store/auth/index.js";
import countries from "@/store/country/index.js";
import positions from "@/store/position/index.js";
import skills from "@/store/skill/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    countries,
    positions,
    skills,
  },
  state() {
    return {};
  },
});

export default store;
