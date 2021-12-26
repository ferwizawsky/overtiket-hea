<template> 

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class="h-screen w-full">
 <div class="w-full h-full flex bg-whitebg"  >
 
    <div class="m-auto   filter drop-shadow-xl rounded-xl bg-white w-7/12 h-4/6    p-0 "  > 
        <div class="flex h-full">
          <div class="w-5/12 h-auto  "><img class="rounded-l-xl object-cover h-full w-full" src="cardlogin.png"></div>
          <div class="w-7/12 text-font ">
           
            <div class="text-sm mx-3 mt-2 font-medium flex">
                <button class="mx-2  font-medium" v-on:click="menu=1">LOGIN
                    <svg class="w-4" :class="{ hidden:menu!=1,'animate-left-1':menu==1}" width="33" height="5" viewBox="0 0 33 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="5" rx="2" fill="#0AC9C9"/>
                    </svg> 
                </button>
                <button class="mx-2  font-medium" v-on:click="menu=2">REGISTER
                    <svg class="w-4 " :class="{ hidden:menu!=2,'animate-left-1':menu==2}" width="33" height="5" viewBox="0 0 33 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="33" height="5" rx="2" fill="#0AC9C9"/>
                                        </svg> 
                </button>
            </div> 


            <div class="w-6/12  mx-4 absolute top-1/2 transform -translate-y-1/2 text-xs text-fontprimary ">
              <span class="font-medium text-5xl text-fontprimary ">LOGIN</span> 

                   <form action="" class="mt-3 mb-3">
                     
 

                    <div class="relative mb-2 ">
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full pl-10  filter drop-shadow-sm text-font px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fontprimary dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />  
                       <span class="absolute rounded-l-lg  bg-primary inset-y-0 left-0 flex items-center"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                         </svg> 
                      </span>
                    </div>

                    <div class="relative mb-2"> 
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full  pl-10 filter drop-shadow-sm drop-shadow-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fontprimary  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                           <span class="absolute rounded-l-lg  bg-primary inset-y-0 left-0 flex items-center"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                          </svg>
                      </span>
                    </div>
                    <div class="mb-4 ">
                        <button type="button" class="absolute right-0 px-6 py-2 text-sm text-white bg-primary rounded-lg hover:bg-lprimary focus:bg-secondary focus:outline-none">LOGIN</button>
                        <span class="text-xs ml-2">Forgot Password ?</span>
                    </div> 

                <div class="text-center mx-1 mt-10 ">  

              <div class="mx-2 mb-2"> Login from social network account </div> 
                <button class="bg-primary rounded-lg filter drop-shadow-sm p-3 w-min h-auto  hover:bg-lprimary focus:bg-secondary mx-1"> 
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="w-6 h-6 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </button>

                   <button class="bg-primary rounded-lg filter drop-shadow-sm p-3 m-auto  w-min h-auto  hover:bg-lprimary focus:bg-secondary mx-1 text-center"> 
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="w-6 h-6 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path> GOOGLE LOGIN</svg>
                </button> 

                </div> 
                </form> 
 
            </div>






          </div>


        </div> 
    </div>

  </div>

</div> 
</template>

<script> 

export default {
  name: 'App',
  components: { 
  },
  data(){
    return{
      menu:1,
    }
  },
  methods:{

  },
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif; 
}

.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-left-1{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-30px;opacity:0} to{left:0;opacity:1}}

</style>
