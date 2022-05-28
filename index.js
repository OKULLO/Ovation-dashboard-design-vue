
import App from "./App.js";

import routes from './routes.js'



const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
})

Vue.createApp(App).use(routes).mount('#app');

