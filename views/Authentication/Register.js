

const template = `
 <div class="h-screen flex flex-wrap md:flex-nowrap  ">
         <div class="md:flex w-full md:w-full md:h-full lg:w-1/2 xl:max-w-screen-sm bg-white">
                  <div class="w-full lg:w-4/5 xl:max-w-screen-sm px-4  ">
                      <div class="py-6  bg-white flex justify-center lg:justify-start lg:px-2">
                          <div class="cursor-pointer flex items-center hidden lg:block md:block">
                              <div>
                                  <svg class="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style="enable-background:new 0 0 225 225;" xml:space="preserve">
                                      <style type="text/css">
                                          .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}
                                      </style>
                                      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                      <g>
                                      <path id="Layer0_0_1_STROKES" class="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"/>
                                      </g>
                                      </g>
                                  </svg>
                              </div>
                              <div class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold font-sans">Ovation</div>
                          </div>
                      </div>
                      <div class="mt-1  px-6  lg:mt-1 xl:px-24 xl:max-w-2xl ">
                        <div class='mb-8'>
                           <h3 class="text-center lg:text-3xl text-lg font-display font-semibold lg:text-left xl:text-5xl
                          xl:text-bold font-sans">Hi, Welcome to Ovation!</h3>
                          <span class='text-gray-500 font-sans'>Enjoy our Dashboard UI Kit that will kickstart your projects in a flash.</span>
                        </div>
                          
                         <div class="flex  space-x-2 justify-center items-end bg-white border-2 hover:bg-gray-600 hover:text-white py-2 rounded-md transition duration-100">

                      <img class=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="">
                            <button class='text-bold font-semibold text-sm font-sans'> Sign up with Google</button>
                          </div>
                          <div class="mt-12">
                              <form>

                                <div>
                                <label for="price" class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm"> 
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg> 
                                 </span>
                                  </div>
                                  <input type="text" name="name" id="name" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none block  pl-10 pr-12 sm:text-sm border-gray-300 " placeholder="John Snow">
                                  
                                </div>
                              </div>
                                
                              <div>
                                <label for="price" class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm"> 
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg> 
                                 </span>
                                  </div>
                                  <input type="email" name="email" id="email" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none block  pl-10 pr-12 sm:text-sm border-gray-300 " placeholder="john@example.com">
                                  
                                </div>
                              </div>
                                 
                                  <div class="mt-8">
                                      <div class="flex justify-between items-center">
                                          <div class="text-sm font-bold text-gray-700 tracking-wide mb-2">
                                              Password
                                          </div>
                                          <div>
                                              <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                              cursor-pointer mb-2">
                                                  Forgot Password?
                                              </a>
                                          </div>
                                      </div>
                                      <div class="mt-1 relative rounded-md shadow-sm">
                                        <div class="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
                                          <span class="text-gray-500 sm:text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg> </span>
                                        </div>
                                        <input type="text" name="password" id="password" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none block  pl-10 pr-12 sm:text-sm border-gray-300 " placeholder="min. 8 characters">
                                        <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                      </div>
                                        
                                      </div>
                                  </div>
                                  <div class="mt-10">
                                      <button class="bg-indigo-500 text-gray-100 p-4 w-full rounded-md tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg">
                                          Sign Up
                                      </button>
                                  </div>
                              </form>
                              <div class="mt-12 text-sm font-display  text-gray-500 text-center font-sans">
                                  Already have an Account?  <a class="cursor-pointer text-indigo-600 hover:text-indigo-800 underline">Login</a>
                              </div>
                          </div>
                      </div>
                  </div>

        </div>

  <div class="flex mt-8 lg:mt-0 md:mt-0 w-full h-auto  lg:w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center  ">
    <div class='w-full lg:w-4/5 xl:max-w-screen-sm px-4 '>

      <div class="-mb-20 mt-20 ">
         <svg width="400" height="340" viewBox="0 0 491 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_637_1706)">
        <rect x="20" y="7" width="450.525" height="299.248" rx="16" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_637_1706" x="0.160385" y="0.386795" width="490.204" height="338.927" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="13.2264"/>
        <feGaussianBlur stdDeviation="9.91981"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0321181 0 0 0 0 0.0908565 0 0 0 0 0.208333 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_1706"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_1706" result="shape"/>
        </filter>
        </defs>
        </svg>
      </div>
      <div class="-mt-5">
          
      <svg width="279" height="268" viewBox="0 0 279 268" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_637_1751)">
        <rect x="65.72" y="3.82263" width="202.529" height="187.65" rx="13.2264" transform="rotate(15 65.72 3.82263)" fill="#FFEBF6"/>
        </g>
        <defs>
        <filter id="filter0_d_637_1751" x="0.282333" y="0.178665" width="277.936" height="267.415" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="13.2264"/>
        <feGaussianBlur stdDeviation="9.91981"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0321181 0 0 0 0 0.0908565 0 0 0 0 0.208333 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_1751"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_1751" result="shape"/>
        </filter>
        </defs>
        </svg>
      </div>



      <div class='mb-20'>
        <h5 class="text-white  text-center font-bold text-xl font-sans text-gray-200 font-sans">Turn your projects into reality</h5>
      <p class="text-gray-200 mt-1 text-base font-sans">Ovation UI Kit will speed your design, making your next project awesome.</p>
      <div>
         <span>
         <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.914307" width="24" height="4" rx="2" fill="white"/>
        </svg>
      </span>
      <span>
          <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3.91431" r="3" fill="#9D90FA"/>
      </svg>
      </span>
      <span><svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3.91431" r="3" fill="#9D90FA"/>
      </svg>

      </span>
      </div>
      

     
      
      </div>
      
    </div>
  </div>

</div>
`


export default {
  template,

  data () {
    return {
      username:'',
      password:''
    }
  },

  methods: {

  }


}