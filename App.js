

const template =`<div class="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Sidebar />

                <div class="flex flex-col flex-1 w-full">
                  <Navigation />
                  <Dashboard/>
                </div>
              </div>`



import Sidebar from "./components/Sidebar.js";
import Navigation from "./components/Navigation.js";
import Dashboard from "./components/Dashboard.js"

export default {
  template,

  components: {
    Sidebar,
    Dashboard,
    Navigation
  },
  mounted () {
    console.log('Application mounted.')
  }

}


