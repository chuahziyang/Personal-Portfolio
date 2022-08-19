import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";
import VueRoughNotation from "vue-rough-notation";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab);

createApp(App)
  .use(store)
  .use(router)
  .use(VueRoughNotation)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
