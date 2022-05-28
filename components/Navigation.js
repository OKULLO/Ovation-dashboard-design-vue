const template=
  `<header class="z-10 py-4 dark:bg-gray-800">
    <div
      class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
    >
      <!-- Mobile hamburger -->
      <button
        class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        v-on:click="toggleSideMenu"
        aria-label="Menu"
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="flex flex-wrap-reverse md:flex-nowrap  w-full ">
      <div class='flex-1 justify-start px-4'>
      <h4 className=" font-semibold text-lg text-gray-800">Hi Jane Eyre,</h4>
      <span className="font-semibold text-2xl">Welcome back 👋</span>
      </div>
      <!-- Search input -->
      <div class="flex-1 justify-center  lg:ml-40">
        
       
     <div className="flex">
     <div className="search-icon"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
     </div>
     <input className="searchBox form-input" type="search" placeholder="Search "/> 
     </div>
      </div>
    </div>
      <ul class="flex items-center flex-shrink-0 space-x-6">
       
        <!-- Notifications menu -->
        <li class="relative px-1 sm:mt-0">
          <button
            class="relative align-middle rounded-full shadow-md bg-white focus:outline-none"
            v-on:click="toggleNotificationsMenu"
            keydown.escape="closeNotificationsMenu"
            aria-label="Notifications"
            aria-haspopup="true"
          >
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
            </svg>
            <!-- Notification badge -->
            <span
              aria-hidden="true"
              class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
            ></span>
          </button>
          <template v-if="isNotificationsMenuOpen">
            <ul
              x-transition:leave="transition ease-in duration-150"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              v-on:click="closeNotificationsMenu"
              @keydown.escape="closeNotificationsMenu"
              class="absolute right-0 w-96 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
              aria-label="submenu"
            >
              <li class="flex">
                    <div class="bg-white rounded-lg shadow-xs p-2 shadow-lg w-full">
                      <div class="flex flex-row ">
                        <div class="px-2">
                          <img class="inline-block h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </div>
                        <div class="ml-2 mr-6">
                          <span class="font-semibold">Gilbert O</span>
                          <span class="block text-gray-500">Commented on <a href='#' class='text-blue-800'> figma Project</a></span>
                        </div>
                      </div>
                    </div>
            </li>
              <li class="flex">
                <div class="bg-cyan-400 rounded-lg shadow-xs p-2 shadow-lg w-full">
                      <div class="flex flex-row ">
                        <div class="px-2">
                          <img class="inline-block h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </div>
                        <div class="ml-2 mr-6">
                          <span class="font-semibold">Gilbert O</span>
                          <span class="block text-gray-500">Commented on <a href='#' class='text-blue-800'> figma Project</a></span>
                        </div>
                      </div>
                    </div>
              </li>
               <li class="flex">
                <div class="bg-white rounded-lg shadow-xs p-2 shadow-lg w-full">
                      <div class="flex flex-row ">
                        <div class="px-2">
                          <img class="inline-block h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </div>
                        <div class="ml-2 mr-6">
                          <span class="font-semibold">Gilbert O</span>
                          <span class="block text-gray-500">Commented on <a href='#' class='text-blue-800'> figma Project</a></span>
                        </div>
                      </div>
                    </div>
              </li>
               <li class="flex">
                <div class="bg-blue-400 rounded-lg shadow-xs p-2 shadow-lg w-full">
                      <div class="flex flex-row ">
                        <div class="px-2">
                          <img class="inline-block h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </div>
                        <div class="ml-2 mr-6">
                          <span class="font-semibold">Gilbert O</span>
                          <span class="block text-gray-500">Commented on <a href='#' class='text-blue-800'> figma Project</a></span>
                        </div>
                      </div>
                    </div>
              </li>
              <li class="flex justify-center">
                <a
                  class="inline-flex  rounded-md bg-indigo-700 items-center justify-center h-10 w-50 px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span>View All Activity</span>
                </a>
              </li>
            </ul>
          </template>
        </li>
        <!-- Profile menu -->
        
      </ul>
    </div>
  </header>
`

export default {
  template,
  data() {
    return {
      isProfileMenuOpen: false,
      isNotificationsMenuOpen: false,
      isSideMenuOpen: false,
      dark: false
    }
  },
  methods: {
    toggleTheme() {
      if (this.dark) {
        this.dark = false
      } else {
        this.dark = true
      }
    },
    toggleSideMenu() {
      if (this.isSideMenuOpen) {
        this.isSideMenuOpen = false
      } else {
        this.isSideMenuOpen = true
      }
    },
    toggleProfileMenu() {
      if (this.isProfileMenuOpen) {
        this.isProfileMenuOpen = false
      } else {
        this.isProfileMenuOpen = true
      }
    },
    toggleNotificationsMenu() {
      if (this.isNotificationsMenuOpen) {
        this.isNotificationsMenuOpen = false
      } else {
        this.isNotificationsMenuOpen = true
      }
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false
    }
  }
}
