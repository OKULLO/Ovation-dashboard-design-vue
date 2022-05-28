const template =`<div class="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Sidebar />

                <div class="flex flex-col flex-1 w-full">
                  <Navigation />
                  <router-view></router-view>
                </div>
              </div>`



import Sidebar from "../../components/Sidebar.js";
import Navigation from "../../components/Navigation.js";

export default {
  template,

  components: {
    Sidebar,
    Navigation
  },
  mounted () {
    console.log('Application mounted.')
  }

}
