
import Login from './views/Authentication/Login.js'
import Sidebar from "./components/Sidebar.js";
import Navigation from "./components/Navigation.js";
import Dashboard from "./components/Dashboard.js";

import App from "./App.js";

// import routes from './routes.js'
const routes = [
  { path: '/Login', component: Login },
    {
    path: '/app',
    component: App,
    name: 'Dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
]


const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
})

Vue.createApp(App).use(routes).mount('#app');

