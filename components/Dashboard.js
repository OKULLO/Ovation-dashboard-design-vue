const template=
  `<div class="container px-6 mx-auto grid mt-8">
 

    <!-- Cards -->
    <div class='flex flex-wrap md:flex-nowrap '>

    <div class='md:flex w-full md:w-full md:h-full lg:w-1/2 pl-4 '>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card -->
      <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-blue-500 bg-teal-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
          
        </div>
         <div class='flex'>
           <div class='flex items-center text-blue-500 justify-between w-full '> 
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
           <span class='text-blue-500 text-lg'>23 %</span>
          </div>
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Today's visitors
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
            4,423
          </p>
        </div>
      </div>
      <!-- Card -->

            <!-- Card -->
        <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-indigo-800 bg-indigo-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
          
        </div>
         <div class='flex'>
           <div class='flex items-center text-orange-500 justify-between w-full '> 
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
           <span class='text-orange-500 text-lg'>23 %</span>
          </div>
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Products Sold today
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
            10 pcs
          </p>
        </div>
      </div>
            <!-- Card -->
        <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          
        </div>
         <div class='flex'>
           <div class='flex items-center text-blue-500 justify-between w-full '> 
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
           <span class='text-blue-500 text-lg'>23 %</span>
          </div>
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Today Income
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
           $14,423
          </p>
        </div>
      </div>


        <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
          
        </div>
         <div class='flex'>
           <div class='flex items-center text-blue-500 justify-between w-full '> 
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
           <span class='text-blue-500 text-lg'>23 %</span>
          </div>
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Total sales
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
            $ 322k
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-indigo-600 bg-indigo-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
          
        </div>
         <div class='flex'>
          
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Members online
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
            248
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex flex-col  justify-start p-4 bg-white rounded-xl shadow-xs dark:bg-gray-800"
      >
       <div class="flex">
        <div
          class="p-3 mr-4 text-blue-500 bg-teal-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
          
        </div>
         <div class='flex'>
           
           
           
         </div>
          
        </div>
        <div class='mt-2'>
          <p class="mb-2 text-sm font-medium font-semibold text-gray-400 dark:text-gray-400">
            Total Orders
          </p>
          <p class="text-lg font-semibold text-xl text-gray-700 dark:text-gray-200">
            11,345
          </p>
        </div>
      </div>
      </div>

    </div>

    
       <div className='flex flex-col w-full lg:w-1/2'>
               <div class="flex w-auto p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 mb-4">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
         Sales Summmary
        </h4>
        <canvas id="pie"></canvas>
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart graph -->
        
        </div>
      </div>

      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 w-full mb-4"
      >
        <div
          class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Income
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            35
          </p>
        </div>
      </div>

      </div>




    
    </div>

      
  
  </div>`


export default {
  template,
  data(){

  }
};
