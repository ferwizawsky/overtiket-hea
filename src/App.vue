<template> 

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

 <div class="w-full  h-screen bg-whitebg"> 

    <div class="m-auto filter drop-shadow-xl rounded-xl bg-white w-7/12 h-4/6 absolute top-1/2 left-1/2  p-0 transform -translate-x-1/2 -translate-y-1/2" > 
        <div class="flex h-full">
          <div class="w-5/12 h-auto  "><img class="rounded-l-xl object-cover h-full w-full" src="cardlogin.png"></div>
          <div class="w-7/12 text-font ">
           
            <div class="text-sm mx-3 mt-2 font-medium flex">
                <div class="mx-2">LOGIN
                    <svg class="w-4" width="33" height="5" viewBox="0 0 33 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="5" rx="2" fill="#0AC9C9"/>
                    </svg> 
                </div>
                <div class="mx-2">REGISTER</div>
            </div> 


            <div class="w-6/12  mx-4 absolute top-1/2 transform -translate-y-1/2 text-xs text-fontprimary ">
              <span class="font-medium text-5xl text-fontprimary ">LOGIN</span> 

                   <form action="" class="mt-3 mb-3">
                     
 

                    <div class="relative mb-2 ">
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full pl-10  filter drop-shadow-sm text-font px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-border-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />  
                       <span class="absolute rounded-l-lg  bg-primary inset-y-0 left-0 flex items-center"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                         </svg> 
                    </span>
                    </div>

                    <div class="mb-2"> 
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full filter drop-shadow-sm drop-shadow-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-4 ">
                        <button type="button" class="absolute right-0 px-6 py-2 text-sm text-white bg-primary rounded-lg focus:bg-indigo-600 focus:outline-none">LOGIN</button>
                        <span class="text-xs ml-2">Forgot Password ?</span>
                    </div> 

                <div class="text-center mx-1 mt-8">  

              <span class="mx-2"> Login from social network account </span>
 
                </div> 
                </form> 


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
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif; 
}
</style>
