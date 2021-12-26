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


                <button class="mx-2  font-medium" v-on:click="menu=3">ABOUT
                    <svg class="w-4 " :class="{ hidden:menu!=3,'animate-left-1':menu==3}" width="33" height="5" viewBox="0 0 33 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="33" height="5" rx="2" fill="#0AC9C9"/>
                                        </svg> 
                </button>


            </div> 









            <div class="w-6/12  mx-4 absolute top-1/2 transform -translate-y-1/2 text-xs text-fontprimary " :class="{ hidden:menu!=1,'animate-opacity':menu==1}" >
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

            <!--- MENU 2 -->






 <div class="w-6/12  mx-4 absolute mt-6 text-xs text-fontprimary " :class="{ hidden:menu!=2,'animate-opacity':menu==2}" >
              <span class="font-medium text-4xl text-fontprimary ">REGISTER</span> 
              <div>
                <svg width="200" height="68" viewBox="0 0 353 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="59" y="32" width="44" height="5" rx="2" class="regon"/>
<rect x="154" y="32" width="44" height="5" rx="2" fill="#0AC9C9"/>
<rect x="249" y="32" width="44" height="5" rx="2" fill="#0AC9C9"/>

<rect x="33.6299" y="3.45837" width="43.1924" height="43.1924" rx="10" transform="rotate(45 33.6299 3.45837)" 
:class="{regon:reg==1,regoff:reg!=1}" v-on:click="reg=1" stroke="#0AC9C9" stroke-width="4"/>
<path d="M30.08 29V26.504H35.072V44H32.312V29H30.08Z"  v-on:click="reg=1" :class="{regon:reg!=1,regoff:reg==1}" />

<rect x="129.37" y="3.45837" width="43.1924" height="43.1924" rx="10" transform="rotate(45 129.37 3.45837)" :class="{regon:reg==2,regoff:reg!=2}"  v-on:click="reg=2" stroke="#0AC9C9" stroke-width="4"/>
<path d="M124.952 40.28C126.488 38.952 127.696 37.864 128.576 37.016C129.472 36.152 130.216 35.256 130.808 34.328C131.4 33.4 131.696 32.472 131.696 31.544C131.696 30.584 131.464 29.832 131 29.288C130.552 28.744 129.84 28.472 128.864 28.472C127.92 28.472 127.184 28.776 126.656 29.384C126.144 29.976 125.872 30.776 125.84 31.784H123.2C123.248 29.96 123.792 28.568 124.832 27.608C125.888 26.632 127.224 26.144 128.84 26.144C130.584 26.144 131.944 26.624 132.92 27.584C133.912 28.544 134.408 29.824 134.408 31.424C134.408 32.576 134.112 33.688 133.52 34.76C132.944 35.816 132.248 36.768 131.432 37.616C130.632 38.448 129.608 39.416 128.36 40.52L127.28 41.48H134.888V43.76H123.224V41.768L124.952 40.28Z" v-on:click="reg=2" :class="{regon:reg!=2,regoff:reg==2}"/>

<rect x="224.37" y="3.45837" width="43.1924" height="43.1924" rx="10" transform="rotate(45 224.37 3.45837)" :class="{regon:reg==3,regoff:reg!=3}" v-on:click="reg=3"  stroke="#0AC9C9" stroke-width="4"/>
<path d="M218.392 30.824C218.488 29.336 219.056 28.176 220.096 27.344C221.152 26.512 222.496 26.096 224.128 26.096C225.248 26.096 226.216 26.296 227.032 26.696C227.848 27.096 228.464 27.64 228.88 28.328C229.296 29.016 229.504 29.792 229.504 30.656C229.504 31.648 229.24 32.496 228.712 33.2C228.184 33.904 227.552 34.376 226.816 34.616V34.712C227.76 35 228.496 35.528 229.024 36.296C229.552 37.048 229.816 38.016 229.816 39.2C229.816 40.144 229.6 40.984 229.168 41.72C228.736 42.456 228.096 43.04 227.248 43.472C226.4 43.888 225.384 44.096 224.2 44.096C222.472 44.096 221.048 43.656 219.928 42.776C218.824 41.88 218.232 40.6 218.152 38.936H220.792C220.856 39.784 221.184 40.48 221.776 41.024C222.368 41.552 223.168 41.816 224.176 41.816C225.152 41.816 225.904 41.552 226.432 41.024C226.96 40.48 227.224 39.784 227.224 38.936C227.224 37.816 226.864 37.024 226.144 36.56C225.44 36.08 224.352 35.84 222.88 35.84H222.256V33.584H222.904C224.2 33.568 225.184 33.352 225.856 32.936C226.544 32.52 226.888 31.864 226.888 30.968C226.888 30.2 226.64 29.592 226.144 29.144C225.648 28.68 224.944 28.448 224.032 28.448C223.136 28.448 222.44 28.68 221.944 29.144C221.448 29.592 221.152 30.152 221.056 30.824H218.392Z"  v-on:click="reg=3" :class="{regon:reg!=3,regoff:reg==3}"/>


<rect x="319.37" y="3.45837" width="43.1924" height="43.1924" rx="10" transform="rotate(45 319.37 3.45837)" :class="{regon:reg==4,regoff:reg!=4}" v-on:click="reg=4"  stroke="#0AC9C9" stroke-width="4"/>
<path d="M311.104 38.352V36.288L319.168 24.72H322.48V35.976H324.712V38.352H322.48V42H319.792V38.352H311.104ZM319.912 27.504L314.248 35.976H319.912V27.504Z"  v-on:click="reg=4" :class="{regon:reg!=4,regoff:reg==4}"/>

</svg>
</div>

                   <form action="" class="mt-3 mb-3" :class="{ hidden:reg!=1,'animate-left-1':reg==1}"> 
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
                </form> 


                <form action="" class="mt-3 mb-3" :class="{ hidden:reg!=2,'animate-top':reg==2}"> 
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
      reg:1,
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

.animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-50px;opacity:0} to{top:0;opacity:1}}
.animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}

.animate-left-1{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-30px;opacity:0} to{left:0;opacity:1}}


.animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
 
</style>
